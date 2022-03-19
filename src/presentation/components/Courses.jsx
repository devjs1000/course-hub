import { Children, useEffect, useState } from 'react';
import CourseCard from './courses/CourseCard';
import useStore from '../../service/context/useStore';
import { Link } from 'react-router-dom';
import BoxLoading from '../UI/BoxLoading';

const Courses = ({}) => {
	const { myCourses, user } = useStore();
	const [teacher, setTeacher] = useState(user._idInstructor);
	useEffect(() => {
		setTeacher(user.isInstructor);
	}, [user._id]);
	console.log(myCourses);
	return (
		<>
			{myCourses.length && user._id !== undefined ? (
				<div>
					<div className="shadow-md px-2 py-1 ">
						{teacher && (
							<>
								<Link
									className="bg-red-700  mx-2 text-white px-3 py-1"
									to="/create-course"
								>
									Create Course
								</Link>
								<Link
									className="bg-red-700 mx-2 text-white px-3 py-1"
									to="/create-quiz"
								>
									Create Quiz
								</Link>
							</>
						)}
					</div>

					{user._id !== undefined ? (
						<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 m-6">
							{Children.toArray(
								myCourses.map(course => {
									return (
										<CourseCard
											title={teacher ? course?.name : course?.courseId?.name}
											enrolled={true}
											drill={true}
											image={teacher ? course?.image : course?.courseId?.image}
											description={
												teacher
													? course?.description
													: course?.courseId?.description
											}
											tagline={
												teacher ? course?.tagline : course?.courseId?.tagline
											}
											type={teacher ? course?.type : course?.courseId?.type}
										/>
									);
								}),
							)}
						</div>
					) : (
						<BoxLoading />
					)}
				</div>
			) : (
				<BoxLoading />
			)}
		</>
	);
};

export default Courses;
