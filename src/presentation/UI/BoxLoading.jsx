import '../../assets/styles/boxLoading.css';

const BoxLoading = ({height='100vh'}) => {
	return (
		<div className='h-[100%]  flex items-center justify-center w-[100%]' style={{minHeight:height}}>
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
