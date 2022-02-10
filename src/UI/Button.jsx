import React from 'react';

const Button = ({
	children,
	isPrimary,
	isOutline,
	textPrimary,
	textWhite,
	onClick,
}) => {
	const buttonCommonStyles =
		'btn font-semibold text-base rounded-md hover:opacity-80 sm:text-lg';
	const primaryBtnStyles = `${buttonCommonStyles} bg-primary-color-dark text-white`;
	const secondaryBtnStyles = `${buttonCommonStyles} bg-white text-primary-color-dark`;
	const secondaryOutline = `${buttonCommonStyles} border-2 border-primary-color-light ${
		textPrimary && 'text-primary-color-dark'
	} ${textWhite && 'text-white'}`;

	const btnStyle = isPrimary
		? primaryBtnStyles
		: isOutline
		? secondaryOutline
		: secondaryBtnStyles;

	return (
		<button className={btnStyle} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
