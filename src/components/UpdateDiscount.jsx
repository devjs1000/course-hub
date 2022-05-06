import React, { useState } from "react";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import useStore from "../context/useStore";
import { updateDiscountMutation } from "../graphql/Mutations";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Select, MenuItem } from "@material-ui/core";

const UpdateDiscount = () => {
  const { user, theme } = useStore();
  const { id } = useParams();
  const [formData, setFormData] = useState({ discountType: " " });
  const [updateDiscount] = useMutation(updateDiscountMutation);

  const handleFloat = (e) => {
    let name = e.target.name;
    let value = parseFloat(e.target.value);
    console.log(e.target.value);
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleDiscountType = (e) => {
    let name = "discountType";
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const token = localStorage.getItem("accessToken");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.discount < 0 || formData.discount > 100) {
      toast.error("Enter a valid discount between 1-100");
      return;
    }

    try {
      let response = await updateDiscount({
        variables: {
          ...formData,
          courseId: id,
        },
        context: {
          headers: {
            Authorization: token,
          },
        },
      });

      // console.log(response);
      toast.success("Discount updated successfully");
      document.getElementById("myForm").reset();
    } catch (err) {
      toast.error("Error occurred in updating discount");
    }
  };
  const mainDivStyles = `${
    theme ? "bg-slate-800 text-white" : "bg-white"
  } py-8 px-16`;

  return (
    <>
      <div className={mainDivStyles}>
        <nav className="flex gap-12 text-[20px] mb-8 bg-gray-200">
          <Link to={`/create-chapter/${id}`}>
            <h1 className="pb-2 pt-4 px-4 font-bold">New Chapter</h1>
          </Link>
          <Link to={`/update-discount/${id}`}>
            <h1 className="pb-2 pt-4 font-bold border-b-4 border-red-500">
              Update Discount
            </h1>
          </Link>
        </nav>
        <form onSubmit={handleSubmit} className="space-y-4" id="myForm">
          <FormControl
            label="discount"
            type="number"
            icon="DISCOUNT"
            onChange={handleFloat}
          />
          <Select
            variant="outlined"
            value={formData.discountType}
            onChange={handleDiscountType}
            className="w-full"
          >
            <MenuItem value=" ">Select Discount Type</MenuItem>
            <MenuItem value="percentage">Percentage</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          <Button type="submit" isWidthFull={true} isPrimary={true}>
            Update
          </Button>
        </form>
      </div>
    </>
  );
};

export default UpdateDiscount;
