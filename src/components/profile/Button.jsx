import React from 'react'
import useStore from '../../context/useStore'
import { useState, useEffect } from "react";

const Button = () => {

	const [btnText, setText] = useState('Off')
	const {theme, setTheme} = useStore()
	return (
		<>
  <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-20 peer appearance-none rounded-md" onClick={(e)=>{
  	btnText=='Off'? setTheme(!theme): 'Off'
  }} />
  <span class="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
  </>

	)
}

export default Button