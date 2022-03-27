
import React from 'react';
import useStore from '../../context/useStore'
import Button from './Button'
function Settings() {
	const {theme, setTheme} = useStore()
	const mainContainerStyles = `p-8 ${theme? 'bg-slate-800 text-white' : 'white text-black'} h-full`
	return (
		<div className={mainContainerStyles}>
			<div className=' w-3/4 flex flex-row'>
				<span className='text-2xl' >Dark Mode:</span>
			<Button/>
			</div>
			
		</div>)

}

export default Settings;
