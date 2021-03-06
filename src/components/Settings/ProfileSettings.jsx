import React,{useState,Children} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStore from "../../context/useStore";
import Button from "../profile/Button";
import InputField from "./inputField";
import { data } from "./data";
import { updateProfile } from "../../graphql/Mutations";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

export default function ProfileSettings() {
  const { theme, setTheme, user } = useStore();
  const [expanded, setExpanded] = useState(false);
  const token = localStorage.getItem("accessToken");

  //options in this section
  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState("");
  let values=[name,image,description]
    const [updateProfile2] = useMutation(updateProfile, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  //functions to handle changes
  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleName = (e) => {
    setName(e.target.value);
  };
   const handleDescription = (e) => {
    setDescription(e.target.value);
  };
   const handleImage = (e) => {
    console.log(e.target.files[0].name);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,image,description)
    toast.promise(
      updateProfile2({
        headers: {
          Authorization: token,
        },
        variables: {
          name: name,
          description: description,
          image: image,
        },
      }).then((res) => console.log(res)),
      {
        loading: "Saving...",
        success: <b>Settings saved!</b>,
        error: <b>Could not save.</b>,
      }
    );
  }
  let handlers = [handleName,handleImage,handleDescription];

  //variable to store output
  let i = -1;
  let list = Children.toArray(
    data.filter(obj=>obj.label=='name' || obj.label=='image'|| obj.label=='description' ).map((obj) => {
      i++;
      return (
        <InputField
          label={obj.label}
          labelTitle={obj.labelTitle}
          img={obj.img}
          type={obj.type}
          value={values[i]}
          handleFunc={handlers[i]}
          extra={obj.extra === undefined ? {} : obj.extra}
        />
      );
    })
  );

  return (
    <div>
      <Accordion expanded={expanded === `panel1`} onChange={handleChange('panel1')} sx={{backgroundColor:'#d7d9db'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={`panel1bh-header`}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Profile settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
      <div className=" w-3/4 flex flex-row">
        <span className="text-xl">Dark Mode:</span>
        <Button />
      </div>
        <form onSubmit={handleSubmit}>
          {list}
        <button type="submit" className='text-white bg-rose-700 mt-4 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800'>
          Submit
        </button>
        </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
