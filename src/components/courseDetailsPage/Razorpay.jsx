const loadRazorpay = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

const showRazorpay = async (price) => {
  const res = await loadRazorpay(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("Error in loading");
    return;
  }
  const options = {
    key: "rzp_test_86YtPVjEJDPP34",
    amount: `${price * 100}`,
    currency: "INR",
    name: "XcitEduction Org.",
    description: "Thanks for enrolling in the course",
    image: "https://example.com/your_logo",
    //   order_id: "order_9A33XWu170gUtm",
    handler: function (response) {
      alert(
        "Payement ID : " + response.razorpay_payment_id + "\nPayment Successful"
      );
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

export { loadRazorpay, showRazorpay };
