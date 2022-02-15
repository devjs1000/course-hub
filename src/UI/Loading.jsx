import React from 'react';
import loader from '../images/loader.svg';

function Loading() {
	return (
		<div className="h-screen flex items-center justify-center">
			<img src={loader} alt="loader animated svg" />
		</div>
	);
}

export default Loading;
