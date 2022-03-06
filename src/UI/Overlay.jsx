import React from 'react';

function Overlay({ clickHandler }) {
	return (
		<div
			className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.7)] z-50"
			onClick={clickHandler}
		></div>
	);
}

export default Overlay;
