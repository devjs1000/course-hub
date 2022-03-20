import React from 'react';
import { useState, useEffect , useContext} from "react";
import {GlobalContext} from '../../components/DarkMode/ThemeContext'


function Settings() {
	const [btnText, setText] = useState('Off')
	// const [theme, setTheme] = useState(false)
	const {theme,setTheme} = useContext(GlobalContext)

	/* for testing dark mode*/
	// useEffect(() => {
	// console.log(theme)
	// console.log(btnText)
	// }, [theme])

	return (
		<div className='p-8'>
		
	{/*content container --cjreads665*/}
	
			<span className='text-2xl' >Dark Mode:</span>
			<button className='bg-sky-800 rounded text-white w-1/12 h-10 ml-2' onClick={()=>{
				setTheme(!theme)
				setText(()=> btnText=='Off'? 'On': 'Off')
			}}>{btnText}</button>
	
		</div>)
}

export default Settings;
