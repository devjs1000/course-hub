import { useState, useRef } from 'react';

const AccordionIcon = ({ className }) => {
	const iconClasses = `w-8 h-8 fill-gray-600 transition-all duration-300 ease-in ${className}`;

	return (
		<svg
			xmlns="https://www.w3.org/2000/svg"
			className={iconClasses}
			viewBox="0 0 20 20"
		>
			<path
				fillRule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

function Accordion() {
	const [isActive, setIsActive] = useState('bg-gray-50');
	const [initialHeight, setInitialHeight] = useState('0px');

	const answerContent = useRef(null);

	const toggleAccordion = () => {
		setIsActive(isActive === 'bg-gray-50' ? 'bg-gray-100' : 'bg-gray-50');
		setInitialHeight(
			isActive === 'bg-gray-50'
				? `${answerContent.current.scrollHeight}px`
				: '0px',
		);
		console.log(answerContent.current.scrollHeight);
	};

	const buttonClass = `w-full text-left border-none p-2 font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex justify-between ${isActive}`;

	const iconClass = `${isActive === 'bg-gray-50' ? 'rotate-0' : 'rotate-90'}`;

	return (
		<div className="border rounded-md">
			<button className={buttonClass} onClick={toggleAccordion}>
				<p>Question 1</p>
				<AccordionIcon className={iconClass} />
			</button>
			<div
				className="overflow-hidden max-h-0 transition-all duration-200 ease-in"
				ref={answerContent}
				style={{ maxHeight: `${initialHeight}` }}
			>
				<div className="p-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					dolor iste odio quia fugit! Dicta tenetur error quisquam eos
					accusamus.
				</div>
			</div>
		</div>
	);
}

export default Accordion;
