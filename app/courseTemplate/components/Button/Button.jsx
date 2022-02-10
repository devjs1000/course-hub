import React from 'react';

const Button = ({ children, isPrimary, isOutline, textPrimary }) => {
	const buttonCommonStyles =
		'btn font-semibold text-base rounded-md hover:opacity-80 sm:text-lg';
	const primaryBtnStyles = `${buttonCommonStyles} bg-primary-color-light`;
	const secondaryBtnStyles = `${buttonCommonStyles} bg-white text-primary-color-light`;
	const secondaryOutline = `${buttonCommonStyles} border border-primary-color-light ${
		textPrimary && 'text-primary-color-light'
	}`;

	const btnStyle = isPrimary
		? primaryBtnStyles
		: isOutline
		? secondaryOutline
		: secondaryBtnStyles;

	return <button className={btnStyle}>{children}</button>;
};

export default Button;
