import React from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Step from '../step/Step';

function Main(props) {
	return (
		<main className="bg-white">
			<About features={props.features} />
			<Skills tags={props.tags}/>
			<Step name={props.tutor.name} about={props.tutor.about} url={props.tutor.url}/>
		</main>
	);
}

export default Main;
