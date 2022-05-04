import React,{useState} from 'react';
import useStore from '../../context/useStore'
import Button from './Button'
import { useQuery, useMutation } from "@apollo/client";
import { updateProfile } from "../../graphql/Mutations";
import toast from "react-hot-toast";





function Settings() {


	const {theme, setTheme,user} = useStore()
	const [name,setName] = useState(user.name)
	const [phone,setPhone] = useState(user.phone)
	const [email,setEmail] = useState(user.email)
  const token = localStorage.getItem("accessToken");
	 const [updateProfile2] = useMutation(updateProfile, {
    variables: {
      
    },
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

	 // console.log(updateProfile2)
//styles

	const mainContainerStyles = `p-8 ${theme? 'bg-slate-800 text-white' : 'white text-black'} h-full`
	const inputTextStyles = ` border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 `
	const labelStyles = `block mb-2 text-sm font-medium capitalize`
	const iconStyles = `absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`
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

	const handleSubmit =(e)=>{
		e.preventDefault()
		updateProfile2({
			  	headers: {
        Authorization: token,
      },
			variables:{
				name:name,
				phone: phone,
				email: email,
			}
		})

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
		}),
   {
     loading: 'Saving...',
     success: <b>Settings saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
	}

	return (
		<div className={mainContainerStyles}>
			<div className=' w-3/4 flex flex-row'>
				<span className='text-2xl' >Dark Mode:</span>
			<Button/>
			</div>
			<form action="" className='m-4 flex flex-col justify-around h-[25rem]' onSubmit={handleSubmit}>
			<h1>Update You Details</h1>

{/*name*/}
			<div>
<label for="name" className={labelStyles}>Your name</label>
<div className="relative">
  <div className={iconStyles}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
  </div>
  <input type="text" id="name"
   className={inputTextStyles} placeholder={user.name} onChange={handleName} value={name} />
</div>
	</div>

{/*email*/}

	<div>
<label for="name" className={labelStyles}>Your email</label>
<div className="relative">
  <div className={iconStyles}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
  </div>
  <input type="text" id="name"
   className={inputTextStyles} placeholder={user.name} onChange={handleEmail} value={email} />
</div>
	</div>

{/*phone number*/}


	<div>
<label for="name" className={labelStyles}>Your phone number</label>
<div className="relative">
  <div className={iconStyles}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
  </div>
  <input type="text" id="name"
   className={inputTextStyles} placeholder={user.name} onChange={handlePhone} value={phone} />
</div>
	</div>

<button type='submit' className={btnStyles}>Submit</button>
			</form>
			
		</div>)

}

export default Settings;
