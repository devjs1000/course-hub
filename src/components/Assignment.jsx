import React, { Children, useState } from 'react';
import CountButton from '../UI/CountButton';
import Search from '../UI/Search';
import { ArrowClockwise } from 'react-bootstrap-icons';
import useStore from '../context/useStore';
import BoxLoading from '../UI/BoxLoading';

const AssignmentCard = () => {
	return (
		<div className="border border-slate-300 shadow-md p-4 rounded-md">
			<h4 className="text-primary-color-dark font-semibold text-xl">
				Data Science
			</h4>
			<p className="text-sm mt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur
				placeat officia cupiditate ea eius, praesentium dolorum? Cum, molestias
				in!
			</p>
			<div className="grid grid-cols-2 text-xs mt-4 text-gray-500">
				<span>Assignment Progress</span>
				<span className="text-right">40%</span>
				<progress
					value="40"
					max="100"
					className="w-full appearance-none border-none h-2 rounded-full overflow-hidden col-span-2 mt-1"
				></progress>
			</div>

			<div className="text-right text-sm mt-6">
				<a
					href="#"
					className="text-primary-color-dark font-semibold px-2 py-1 hover:bg-primary-color-dark hover:text-white transition-all duration-300"
				>
					Visit Course &rarr;
				</a>
			</div>
		</div>
	);
};

const Assignment = ({}) => {
	const { assignments, user, myCourses } = useStore();
	const [assignmentData, setAssignmentData] = useState({});
	const [courseInfo, setCourseInfo] = useState(null);
	const [isActive, setActive] = useState(false);
	const assignmentPrint = {
		title: 'My Assignments',
	};

	const getAssignmentData = e => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = { ...assignmentData };
		newData[name] = value;
		setAssignmentData(newData);
	};

	const getSelected = e => {
		if (e.target.value === 'None') return setCourseInfo(null);
		const exact = myCourses.find(data => data.name === e.target.value);
		setCourseInfo({
			instructorId: exact.instructorId,
			courseId: exact._id,
			userId: user._id,
		});
	};

	const submitAssignment = e => {
		e.preventDefault();
		if (!courseInfo) return alert('Select the course for assignment');
		const finalData = { ...assignmentData, ...courseInfo };
		// Post request here
		e.target.reset();
		setCourseInfo(null);
	};

	const assignmentNav = ['All', 'Pending', 'Submitted'];

	return (
		<>
			<div className="bg-primary-color-dark text-white py-2 px-16">
				<h2 className="font-semibold text-3xl">Assignments</h2>
			</div>
			<div className="px-16 pb-8 flex flex-col gap-8 items-start">
				<div className="assignment-navigation mt-8 border-b-2 border-gray-500 relative py-1">
					{Children.toArray(
						assignmentNav.map(item => (
							<span className="text-center inline-block">{item}</span>
						)),
					)}
					<div className="animated-border absolute bottom-[-0.15rem] left-0 w[3rem] h-[2px] bg-primary-color-dark"></div>
				</div>
				<div className="grid grid-cols-4 gap-4">
					<AssignmentCard />
					<AssignmentCard />
					<AssignmentCard />
					<AssignmentCard />
					<AssignmentCard />
				</div>
			</div>
		</>
	);
};

export default Assignment;

// CARD
/* <div className="w-2/6 mx-auto bg-red-300 p-3 rounded-lg my-3">
     <h1 className="text-2xl font-bold text-center text-white">Create Assignment</h1>
      <form className="bg-red-300 p-5 flex flex-col items-center justify-between" onSubmit={submitAssignment}>
        <input className="w-full my-2 px-2 py-1 rounded-md outline-none" required onChange={getAssignmentData} placeholder="Assignment Link" name="assignmentLink"  type="text" />
        <input className="w-full my-2 px-2 py-1 rounded-md outline-none" required onChange={getAssignmentData} placeholder="Assignment Screenshot Link" name="assignmentScreenshotLink"  type="text" />
        <input className="w-full my-2 px-2 py-1 rounded-md outline-none" onChange={getAssignmentData} placeholder="Assignment Comment" name="assignmentComment"  type="text" />
        <select onChange={getSelected} className="w-3/6 my-2 outline-none rounded-md text-gray-500 p-1">
          <option>None</option>
          {
            myCourses.map(course=> <option key={course._id}>{course.name}</option> )
          }
        </select>
        <button className="m-btn border-2 px-3 py-1 mt-2 font-bold text-white" type="submit">Submit</button>
      </form>
     </div> */

///////////////////////////////////////////
//  previous code
/*
          {assignments?.data ? (
				<div className="bg-slate-100 h-[85vh]">
					<h1 className="p-4 text-4xl sm:text-6xl font-bold text-center text-slate-700 ">
						{assignmentPrint.title}
					</h1>
					<div className="flex mx-[0rem] sm:mx-[6rem]">
						<CountButton title={'All'} count={0} />
						<CountButton title={'Un Checked'} count={0} />
						<CountButton title={'Checked'} count={0} />
					</div>
					<div className="my-4 flex justify-center bg-white py-3">
						<Search placeholder="Search your tasks" />
						<ArrowClockwise className="bg-red-700 text-white w-[2rem] mx-1 hover:text-red-700 hover:bg-white transition-all h-[2rem] p-1" />
					</div>

					<div className="h-[70vh]  overflow-auto">
						{Children.toArray(
							assignments.data.map(a => {
								return <AssignmentCard assignments={a} />;
							}),
						)}
					</div>
				</div>
			) : (
				<BoxLoading />
			)}
			
    */
