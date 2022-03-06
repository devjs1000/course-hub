import { X, PlayFill } from 'react-bootstrap-icons';

const NextLesson = () => {
	return (
		<div className="flex items-center gap-10 px-2 py-1 rounded-md odd:bg-gray-50 even:bg-gray-100">
			<div className="h-12 w-12 rounded-full bg-red-100 grid place-content-center border border-red-200">
				<PlayFill className="text-3xl text-primary-color-light" />
			</div>
			<h6 className="text-2xl">Lesson2</h6>
			<span className="ml-auto">12:20</span>
		</div>
	);
};

function CourseVideo({ clickHandler }) {
	return (
		<div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100vh] bg-white w-[55%] z-50 p-4 flex flex-col gap-4">
			<X
				className="text-6xl self-end text-primary-color-light hover:text-primary-color-dark cursor-pointer"
				onClick={clickHandler}
			/>
			<div className="h-[70vh] bg-gray-500"></div>
			<div className=" overflow-y-scroll flex flex-col gap-2">
				<NextLesson />
				<NextLesson />
				<NextLesson />
				<NextLesson />
				<NextLesson />
			</div>
		</div>
	);
}

export default CourseVideo;
