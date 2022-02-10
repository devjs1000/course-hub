import React from 'react';

function Feature({ icon, title, content }) {
	return (
		<div className="flex flex-col items-center gap-2 shadow-md py-12 px-8">
			<img src={icon} alt="feature icon" className="w-12 mb-6 lg:w-16" />
			<h4 className="text-primary-color-dark font-semibold text-lg md:text-xl">
				{title}
			</h4>
			<p className="text-gray-600 text-sm md:text-base">{content}</p>
		</div>
	);
}

export default Feature;
