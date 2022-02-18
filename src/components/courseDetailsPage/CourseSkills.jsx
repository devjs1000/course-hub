import { Children } from 'react';

const SkillBadge = ({ tags }) => {
	return (
		<div className="border rounded-xl mt-8 flex items-center justify-center gap-4 flex-wrap py-8 px-2">
			{Children.toArray(
				tags.map(tag => {
					return (
						<span className="bg-gray-300 py-2 px-4 rounded-full text-gray-800 text-sm md:text-base">
							{tag}
						</span>
					);
				}),
			)}
		</div>
	);
};

function CourseSkills(courses) {
	const tags = [
		'Spreadsheet',
		'Questioning',
		'Metadata',
		'Data Cleansing',
		'Data Collection',
		'Decision-Making',
		'Data Ethics',
		'SQL',
		'Sample Size Determination',
	];

	return (
		<section className="text-center px-16">
			<h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-500">
				Skills you will gain
			</h2>
			<SkillBadge tags={tags} />
		</section>
	);
}

export default CourseSkills;
