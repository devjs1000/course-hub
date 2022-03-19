import { Children } from 'react';
import {
	PersonVideo3,
	QuestionOctagon,
	JournalCheck,
	Calendar4,
	Award,
	EmojiSmile,
} from 'react-bootstrap-icons';

function Feature({ icon, title }) {
	return (
		<div className=" flex flex-col text-center items-center gap-2 py-8 px-2 border-b sm:border-none shadow-sm lg:flex-row lg:text-left lg:px-4 lg:gap-4">
			<div className="">
				<div className="h-14 w-14 bg-gray-50 rounded-full border border-gray-300 relative lg:h-12 lg:w-12">
					{icon}
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<h4 className="text-slate-900 font-semibold text-xl">{title}</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
					temporibus.
				</p>
			</div>
		</div>
	);
}

function WhatYouGet({ className }) {
	const iconClasses = `text-red-800 text-2xl mb-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-xl`;
	const features = [
		{
			title: 'Learn from top instructors',
			icon: <PersonVideo3 className={iconClasses} />,
		},
		{
			title: 'Personalized doubt session',
			icon: <QuestionOctagon className={iconClasses} />,
		},
		{
			title: 'Complete online course',
			icon: <JournalCheck className={iconClasses} />,
		},
		{
			title: 'Learn at your own pace',
			icon: <Calendar4 className={iconClasses} />,
		},
		{
			title: 'Earn a valuable credential',
			icon: <Award className={iconClasses} />,
		},
		{
			title: 'Get a charming career',
			icon: <EmojiSmile className={iconClasses} />,
		},
	];

	const asideClasses = `${className} text-gray-500`;
	return (
		<aside className={asideClasses}>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
				{Children.toArray(
					features.map(feature => {
						return <Feature icon={feature.icon} title={feature.title} />;
					}),
				)}
			</div>
		</aside>
	);
}

export default WhatYouGet;
