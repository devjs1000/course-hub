import React from 'react';
import SkillTags from '../../components/SkillTags/SkillTags';

function Skills(props) {
	return (
		<section className="text-center px-8">
			<h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-500">
				Skills you will gain
			</h2>
			<SkillTags tags={props.tags}/>
		</section>
	);
}

export default Skills;
