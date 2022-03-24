import React from 'react';
import useStore from '../context/useStore'

function SectionHeading({ subHeading, heading }) {
	const {theme} = useStore()
	const headingStyles = `text-5xl font-semibold leading-[3.5rem] ${theme?'text-white' : 'text-slate-900'}`
	return (
		<div className="w-full flex flex-col gap-10 lg:w-[50%]">
			<h4 className="max-w-min text-slate-400 text-2xl font-semibold relative after:absolute after:bottom-[-1rem] after:left-0 after:h-1 after:w-[40%] after:bg-primary-color-light uppercase">
				{subHeading}
			</h4>
			<h2 className={headingStyles}>
				{heading}
			</h2>
		</div>
	);
}

export default SectionHeading;
