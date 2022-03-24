import React from 'react';
import { useState, useEffect } from "react";
import useStore from '../../context/useStore'
import Button from './Button'
function Settings() {
	const [btnText, setText] = useState('Off')
	// const [theme, setTheme] = useState(false)
const {theme, setTheme} = useStore()

	return (
		<div className='p-8'>
		
	{/*content container --cjreads665*/}
		
			<span className='text-2xl' >Dark Mode:</span>
			{/*<button className='bg-sky-800 rounded text-white w-1/12 h-10 ml-2' onClick={()=>{
				setTheme(!theme)
				setText(()=> btnText=='Off'? 'On': 'Off')
			}}>{btnText}</button>
			<Button/>*/}
			<Button/>
		</div>)
}

export default Settings;
