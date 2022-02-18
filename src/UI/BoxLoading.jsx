import '../styles/boxLoading.css';

const BoxLoading = () => {
	return (
		<div className="sk-folding-cube fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rotate-45">
			<div className="sk-cube1 sk-cube"></div>
			<div className="sk-cube2 sk-cube"></div>
			<div className="sk-cube4 sk-cube"></div>
			<div className="sk-cube3 sk-cube"></div>
		</div>
	);
};

export default BoxLoading;
