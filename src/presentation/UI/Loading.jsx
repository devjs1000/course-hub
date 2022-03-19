import React from 'react';
import loader from '../../assets/images/loader.svg';

function Loading({className}) {
	const loadingClasses = `${className} h-screen flex items-center justify-center`;
	return (
		<div className={loadingClasses}>
			<img src={loader} alt="loader animated svg" />
		</div>
	);
}

export default Loading;
