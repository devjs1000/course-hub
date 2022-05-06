import React,{useState,Children} from 'react';
import useStore from '../../context/useStore'
import Button from './Button'
import { useQuery, useMutation } from "@apollo/client";
import { updateProfile } from "../../graphql/Mutations";
import toast from "react-hot-toast";
import {data} from '../Settings/data'
import InputField from '../Settings/inputField'

function Settings() {
	const {theme, setTheme,user} = useStore()
	const [password,setPassword] = useState(user.password)
	const [name,setName] = useState(user.name)
	const [phone,setPhone] = useState(user.phone)
	const [email,setEmail] = useState(user.email)
	let values = [name,email,phone,password]
  const token = localStorage.getItem("accessToken");
	 const [updateProfile2] = useMutation(updateProfile, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

//styles
	const mainContainerStyles = `p-8 ${theme? 'bg-slate-800 text-white' : 'white text-black'} h-full`
	const btnStyles = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`

//functions to handle the changes to the fields
	const handleName =e=>{
		setName(e.target.value)
	}
	const handleEmail =e=>{
		setEmail(e.target.value)
	}
	const handlePhone =e=>{
		setPhone(e.target.value)
	}
	const handlePassword =e=>{
		if(e.target.value!=='' || e.target.value!==' ') setPassword(e.target.value)
	}
	let handlers = [handleName,handleEmail,handlePhone,handlePassword]
	const handleSubmit =(e)=>{
		e.preventDefault()
		toast.promise(
  updateProfile2({
  	headers: {
        Authorization: token,
      },
			variables:{
				name:name,
				phone: phone,
				email: email,
			}
		}).then(res=>console.log(res)),
   {
     loading: 'Saving...',
     success: <b>Settings saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
	}

let i= -1
let list= Children.toArray(data.map(obj=>{
	i++
	return <InputField 
		label={obj.label}
		labelTitle={obj.labelTitle}
		img={obj.img} 
		type={obj.type} value={values[i]}
		handleFunc={handlers[i]}
	 />
}))
	return (
		<div className={mainContainerStyles}>
			<div className=' w-3/4 flex flex-row'>
				<span className='text-2xl' >Dark Mode:</span>
			<Button/>
			</div>
			<form action="" className='m-4 flex flex-col justify-around h-[25rem]' onSubmit={handleSubmit}>
			<h1>Update You Details</h1>
			{list}
<button type='submit' className={btnStyles}>Submit</button>
			</form>

		</div>)

}

export default Settings;
