import { Children } from 'react';

const SkillBadge = ({ tags }) => {
	return (
		<div className="flex items-center justify-center gap-4 flex-wrap py-4">
			{Children.toArray(
				tags.map(tag => {
					return (
						<span className="bg-gray-300 py-1 px-3 rounded-full text-gray-800 text-sm">
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
		<section className="text-center border rounded-md p-2 mt-6">
			<h2 className="font-semibold text-md uppercase text-left">
				Skills you will gain
			</h2>
			<SkillBadge tags={tags} />
		</section>
	);
}

export default CourseSkills;
