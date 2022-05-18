import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Plus } from "react-bootstrap-icons";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useMutation} from "@apollo/client";
import {addBenefit} from '../../graphql/Mutations'
import {getBenefits} from '../../graphql/Queries'
import toast from "react-hot-toast";

const AddBenefits = ({id}) => {
let [open,setOpen] = useState(false)
let [name,setName] = useState('')
let [description,setDescription] = useState('')
const token = localStorage.getItem("accessToken");	
 const [addBeneft] = useMutation(addBenefit, {
    context: {
      headers: {
        Authorization: token,
      },
    },
      refetchQueries:[getBenefits]
  });
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'90%',
    height:'60%',
  },
};
const handleSubmit = ()=>{
	if(name==''|| description==''){
    alert('please fill all fields!')
    return;
  }
  toast.promise(
  addBeneft({
      headers: {
        Authorization: token,
      },
      variables: {
        courseId: id,
        name: name,
        description : description
      },
    }),
   {
     loading: 'Saving...',
     success: <b>Benefit saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
  setTimeout(()=>{
    setOpen(false)
    setName('')
    setDescription('')
  },1500)
}
  return (
  	<div className='h-[50%] flex justify-end my-4'>
         <Button variant="contained" color='secondary'
          onClick={()=>setOpen(true)}><Plus/> Add </Button>
  		<Modal
        isOpen={open}
        onRequestClose={true}
        style={customStyles}
        contentLabel="Add Benefit"
      >
       <form className='flex flex-col justify-around h-full'
       onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit()
       }}
       >
         <TextField id="name" label="Name Of Benefit" variant="outlined"
          onChange={(e)=>setName(e.target.value)} value={name}
           />
          <textarea name="description" id="description" cols="30" rows="10" className='p-2' placeholder='Describe your benefit here..'
          onChange={(e)=>setDescription(e.target.value)} value={description}
          ></textarea>
          <div>
            <Button variant="contained" type='submit' >Submit</Button>
            <Button variant="text" onClick={()=>setOpen(false)}>Cancel</Button>
          </div>
       </form>
      </Modal>
  	</div>
  	
      )
}

export default AddBenefits