import { useQuery, useMutation } from "@apollo/client";
import axios from "axios";
import { createOrder } from "../../graphql/Mutations";
import { getOrderId } from "../../graphql/Queries";

const api = {
  dev: "http://localhost:6900/xcite",
  online: "https://xcite-server.herokuapp.com/xcite",
};

const useRazor = () => {
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const showRazorpay = async (courseId, userId) => {
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Error in loading");
      return;
    }

    const token = localStorage.getItem("accessToken");
    const orderData = await axios.post(
      api.online,
      {
        query: getOrderId,
        variables: {
          courseId,
        },
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(orderData);

    // return ''

    const options = {
      key: import.meta.env.KEY_ID,
      currency: "INR",
      order_id: orderData.data.data.getOrderId.id,
      receipt: orderData.data.data.getOrderId.receipt,
      name: "XcitEduction Org.",
      description: "Thanks for enrolling in the course",
      image: "https://example.com/your_logo",
      //   order_id: "order_9A33XWu170gUtm",

      handler: async function (response) {
        console.log(response);

        const verificationOrder = await axios.post(
          api.online,
          {
            query: createOrder,
            variables: {
              courseId,
              razorpaySignature: response.razorpay_signature,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
            },
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log(verificationOrder);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new Razorpay(options);
    paymentObject.open();
  };
  return { loadRazorpay, showRazorpay };
};

export default useRazor;
