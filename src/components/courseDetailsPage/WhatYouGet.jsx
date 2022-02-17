import { Children } from 'react';
import {
	PersonVideo3,
	QuestionOctagon,
	JournalCheck,
	Calendar4,
	Award,
	EmojiSmile,
} from 'react-bootstrap-icons';

function Feature({ icon, title, content }) {
	return (
		<div className=" flex flex-col items-center gap-2 shadow-md py-12 px-8">
			{icon}
			<h4 className="text-primary-color-dark font-semibold text-lg md:text-xl">
				{title}
			</h4>
			<p className="text-gray-600 text-sm md:text-base">{content}</p>
		</div>
	);
}

function WhatYouGet() {
	const iconClasses = `icon-gradient text-red-800 text-6xl mb-4`;
	const features = [
		{
			title: 'Learn from top instructors',
			content:
				'Apply your new skills to real-world projects using the latest industry tools and techniques.',
			icon: <PersonVideo3 className={iconClasses} />,
		},
		{
			title: 'Personalized doubt session',
			content:
				'Apply your new skills to real-world projects using the latest industry tools and techniques.',
			icon: <QuestionOctagon className={iconClasses} />,
		},
		{
			title: 'Complete online course',
			content:
				'Apply your new skills to real-world projects using the latest industry tools and techniques.',
			icon: <JournalCheck className={iconClasses} />,
		},
		{
			title: 'Learn at your own pace',
			content:
				'Apply your new skills to real-world projects using the latest industry tools and techniques.',
			icon: <Calendar4 className={iconClasses} />,
		},
		{
			title: 'Earn a valuable credential',
			content:
				'Apply your new skills to real-world projects using the latest industry tools and techniques.',
			icon: <Award className={iconClasses} />,
		},
		{
			title: 'Get a charming career',
			content:
				'Apply your new skills to real-world projects using the latest industry tools and techniques.',
			icon: <EmojiSmile className={iconClasses} />,
		},
	];
	return (
		<section className="pt-40 px-8 mb-16 text-center text-gray-500 mt-[-5rem]">
			<h2 className="font-bold mb-12 text-3xl sm:text-4xl md:text-5xl">
				What will you get?
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-4">
				{Children.toArray(
					features.map(feature => {
						return (
							<Feature
								icon={feature.icon}
								title={feature.title}
								content={feature.content}
							/>
						);
					}),
				)}
			</div>
		</section>
	);
}

export default WhatYouGet;
