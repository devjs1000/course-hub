import React from 'react';

function SectionHeading({ subHeading, heading }) {
	return (
		<div className="w-[50%] flex flex-col gap-10">
			<h4 className="max-w-min text-slate-400 text-2xl font-semibold relative after:absolute after:bottom-[-1rem] after:left-0 after:h-1 after:w-[40%] after:bg-primary-color-light uppercase">
				{subHeading}
			</h4>
			<h2 className="text-5xl font-semibold leading-[3.5rem] text-slate-900">
				{heading}
			</h2>
		</div>
	);
}

export default SectionHeading;
