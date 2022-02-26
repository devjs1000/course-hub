import { StarFill } from 'react-bootstrap-icons';

const ReviewBox = ({ className }) => {
	let startIcon = [];

	for (let i = 0; i < 5; i++) {
		startIcon.push(<StarFill className="text-yellow-500" />);
	}

	const boxClass = `${className} shadow-md p-4 flex flex-col items-start justify-center`;

	return (
		<div className={boxClass}>
			<div className="flex items-center gap-1">
				{startIcon.map(star => {
					return <span key={Math.random().toString()}>{star}</span>;
				})}
			</div>
			<span className="inline-block text-sm mb-3">
				by <strong>olivia kent</strong> 26th Feb 2022
			</span>
			<p className="text-[0.9rem]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est.
				Eius, a magni! Ea, libero expedita. Reiciendis delectus adipisci minima.
			</p>
		</div>
	);
};

function DetailsReview() {
	return (
		<section className="mt-24" id="reviews">
			<h2 className="uppercase font-semibold text-lg">
				Top reviews from the course
			</h2>
			<div className="my-4 grid grid-cols-3 gap-4">
				<ReviewBox />
				<ReviewBox className="col-span-2" />
				<ReviewBox className="col-span-2" />
				<ReviewBox />
			</div>
		</section>
	);
}

export default DetailsReview;
