import React from 'react';

const Button = ({
	children,
	isPrimary,
	isOutline,
	textPrimary,
	textWhite,
	onClick,
	isWidthFull,
	type,
}) => {
	const buttonCommonStyles = `${
		isWidthFull ? 'w-full' : 'w-[8rem]'
	} h-[2.5rem] font-semibold text-base rounded-md hover:opacity-80 sm:text-lg cursor-pointer sm:w-[10rem] h-[3rem]`;
	const primaryBtnStyles = `${buttonCommonStyles} bg-primary-color-dark text-white`;
	const secondaryBtnStyles = `${buttonCommonStyles} bg-white text-primary-color-dark`;
	const secondaryOutline = `${buttonCommonStyles} border-2 border-primary-color-dark ${
		textPrimary && 'text-primary-color-dark'
	} ${textWhite && 'text-white'}`;

	const btnStyle = isPrimary
		? primaryBtnStyles
		: isOutline
		? secondaryOutline
		: secondaryBtnStyles;

	return (
		<button className={btnStyle} onClick={onClick} type={type || 'button'}>
			{children}
		</button>
	);
};

export default Button;
