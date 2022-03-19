import React from 'react';
import { PlayFill } from 'react-bootstrap-icons';

function NextVideo({ lesson, title, length }) {
	return (
		<div className="flex items-center text-slate-900 gap-6">
			<span className="h-12 w-12 rounded-md bg-red-200 border grid place-content-center">
				<PlayFill className="text-3xl text-primary-color-light" />
			</span>
			<div>
				<span className="font-semibold">{lesson}</span>
				<h6>{title}</h6>
			</div>
			<span className="self-end ml-auto">{length}</span>
		</div>
	);
}

export default NextVideo;
