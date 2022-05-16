import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { addBenefit } from "../../graphql/Mutations";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const AddBenefits = ({formStyles,btnStyles,id}) => {
	let [description,setDescription] = useState('')
	let [benName,setBenName] = useState('')
  const token = localStorage.getItem("accessToken");
	let [addBeneft] = useMutation(addBenefit)
	let handleSubmit = (e)=>{
		e.preventDefault()
		toast.promise(
 addBeneft({
	headers: {
        Authorization: token,
      },
      variables:{
      	courseId: id,
      	name: benName,
      	description: description
      }
		}),
   {
     loading: 'Saving...',
     success: <b>Settings saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
		
	}

	return (
		<div className='h-[20rem]'>
      <h1 className='text-2xl font-bold'>Add Benefit</h1>
        <form className={formStyles} onSubmit={handleSubmit}>
       <label htmlFor="name">Name for the Benefit</label>
       <TextField id="name" label="Name" variant="outlined"
       	onChange={(e)=>setBenName(e.target.value)}
       	value={benName}
        />  
       <label htmlFor="description">Describe Your Benefit</label>
       <textarea name="description" id="description"
       className='border border-1 border-black h-24 p-2'
       placeholder='Explain you benefit here'
       onChange={(e)=>setDescription(e.target.value)}
       value={description}
       />
       <input type="submit"
       className={btnStyles}
       />
        </form>
      </div>
	)
}

export default AddBenefits