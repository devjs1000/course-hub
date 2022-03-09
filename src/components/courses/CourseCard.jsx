import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import useStore from '../../context/useStore';
import author from '../../images/author.jpg';
import { Clock, ListUl } from 'react-bootstrap-icons';

const CourseCard = ({
	enrolled = false,
	id,
	drill = false,
	image,
	title,
	tagline,
	price,
	type,
	description,
}) => {
	const { allCoursesData } = useStore();
	const [current, setCurrent] = useState({});
	useEffect(() => {
		if (drill) return;
		const data = allCoursesData.find(course => course._id === id);
		setCurrent(data);
	}, [id]);

	return (
		<ErrorBoundary fallback={'error in course page'}>
			<Link to={`coursedetails/${id}`}>
				<div className="rounded-sm relative w-[21rem] shadow-md overflow-hidden cursor-pointer">
					<div className="h-[12rem] rounded-t-sm overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(255,118,118,0.09)]">
						<img
							src={drill ? image : current?.image}
							alt="course-image"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="relative px-8 py-10 bg-white text-slate-900 flex flex-col items-start gap-4">
						<span className="bg-orange-300 text-[10px] font-semibold rounded-sm text-white px-2 py-[.1rem] uppercase flex-end">
							{drill ? type : current?.type}
						</span>
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2 font-semibold text-gray-700">
								<Clock className="text-lg text-primary-color-light" />
								<span>35 Hours</span>
							</div>
							<div className="flex items-center gap-2 font-semibold text-gray-700">
								<ListUl className="text-xl text-primary-color-light" />
								<span>300</span>
							</div>
						</div>
						<h3 className="leading-6 text-xl font-semibold h-12 text-slate-800">
							{drill ? tagline : current?.tagline}
						</h3>
						<div className="flex items-center gap-4">
							<div
								className="bg-cover h-12 w-12 rounded-full border bg-no-repeat bg-top"
								style={{ backgroundImage: `url(${author})` }}
							></div>
							<span>John Doe</span>
						</div>
						<span className="absolute top-[-1.1rem] right-[1rem] bg-[#fc2340] px-4 py-1 rounded-sm text-white text-xl">
							₹ {drill ? price : current?.price}/-{' '}
						</span>
					</div>
				</div>
			</Link>
		</ErrorBoundary>
	);
};

export default CourseCard;
