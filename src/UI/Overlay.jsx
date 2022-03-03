import React from 'react';

function Overlay({ openSidebarHandler }) {
	return <div className="overlay" onClick={openSidebarHandler}></div>;
}

export default Overlay;
