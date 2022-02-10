import React from 'react';

function SkillTags(props) {
	return (
		<div className="border rounded-xl mt-8 flex items-center justify-center gap-4 flex-wrap py-8 px-2">
			{React.Children.toArray(
				props.tags.map(tag => {
					return (
						<span className="bg-gray-300 py-2 px-4 rounded-full text-gray-800 text-sm md:text-base">
							{tag}
						</span>
					);
				}),
			)}
		</div>
	);
}

export default SkillTags;
