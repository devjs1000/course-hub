import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {updateBenefit} from '../../graphql/Mutations'
import {getBenefits} from '../../graphql/Queries'
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

Modal.setAppElement('#root');

export default function ModifyBenefitModal({isOpen,setIsOpen,selectedBenefit,id}) {
let [name,setName] = useState('')
let [description,setDescription] = useState('')
const token = localStorage.getItem("accessToken");
const [updateBeneft] = useMutation(updateBenefit, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    refetchQueries:[getBenefits]
  });
let handleSubmit = ()=>{
  if(name==''|| description==''){
    alert('please fill all fields!')
    return;
  }
  console.log(selectedBenefit)
  toast.promise(
  updateBeneft({
      headers: {
        Authorization: token,
      },
      variables: {
        courseId: id,
        benefitId: selectedBenefit.benefitId,
        name: name,
        description : description
      },
    }),
   {
     loading: 'Saving...',
     success: <b>Settings saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
  setTimeout(()=>{
    setIsOpen(false)
  },1500)
}
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
  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={true}
        style={customStyles}
        contentLabel="Example Modal"
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
            <Button variant="text" onClick={()=>setIsOpen(false)}>Cancel</Button>
          </div>
       </form>
      </Modal>
  );
}
