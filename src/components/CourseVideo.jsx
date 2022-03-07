import { useState, useRef } from 'react';
import {
	X,
	PlayFill,
	ArrowClockwise,
	ArrowCounterclockwise,
} from 'react-bootstrap-icons';
import videoMp4 from '../images/video.mp4';
import videoWebm from '../images/video.webm';

const NextLesson = () => {
	return (
		<div className="flex items-center gap-10 px-2 py-1 rounded-md odd:bg-gray-50 even:bg-gray-100 cursor-pointer hover:bg-white">
			<div className="h-12 w-12 rounded-full bg-red-100 grid place-content-center border border-red-200">
				<PlayFill className="text-3xl text-primary-color-light" />
			</div>
			<h6 className="text-2xl">Lesson2</h6>
			<span className="ml-auto">12:20</span>
		</div>
	);
};

function CourseVideo({ clickHandler }) {
	const [cursorOnVideo, setCursorOnVideo] = useState(false);
	const target = useRef(null);

	const cursorOnVideoHandler = () => {
		setCursorOnVideo(true);
	};

	const cursorNotOnVideoHandler = () => {
		setCursorOnVideo(false);
	};

	const forwardHandler = () => {
		target.current.currentTime += 10;
	};

	const revertHandler = () => {
		target.current.currentTime -= 10;
	};

	const controlsClasses = `absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-evenly text-5xl text-gray-200 w-full transition-all duration-300 ${
		cursorOnVideo ? 'opacity-100' : 'opacity-0'
	}`;

	const iconWraaperClasses =
		'relative h-14 w-14 bg-[rgba(0,0,0,.5)] rounded-full grid place-content-center cursor-pointer';

	const iconTextClasses =
		'text-[10px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] select-none';

	return (
		<div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100vh] bg-white w-[55%] z-50 p-4 flex flex-col gap-4">
			<X
				className="text-6xl self-end text-primary-color-light hover:text-primary-color-dark cursor-pointer"
				onClick={clickHandler}
			/>
			<div
				className="relative h-[70vh] bg-gray-500"
				onMouseEnter={cursorOnVideoHandler}
				onMouseLeave={cursorNotOnVideoHandler}
			>
				{/* video start */}
				<video controls className="w-full h-full" ref={target}>
					<source src={videoMp4} type="video/mp4"></source>
					<source src={videoWebm} type="video/webm"></source>
				</video>

				<div className={controlsClasses}>
					<div className={iconWraaperClasses} onClick={revertHandler}>
						<ArrowCounterclockwise />
						<span className={iconTextClasses}>-10</span>
					</div>
					<div className={iconWraaperClasses} onClick={forwardHandler}>
						<ArrowClockwise />
						<span className={iconTextClasses}>10+</span>
					</div>
				</div>

				{/* video end */}
			</div>
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
