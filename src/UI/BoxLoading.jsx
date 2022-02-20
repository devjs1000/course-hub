import '../styles/boxLoading.css';

const BoxLoading = () => {
	return (
		<div className='h-[100%] min-h-[10rem] flex items-center justify-center w-[100%]'>
		<div className="sk-folding-cube rotate-45" >
			<div className="sk-cube1 sk-cube"></div>
			<div className="sk-cube2 sk-cube"></div>
			<div className="sk-cube4 sk-cube"></div>
			<div className="sk-cube3 sk-cube"></div>
		</div>
		</div>
	);
};

export default BoxLoading;
