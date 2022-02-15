import React, { useState } from 'react';
import FormControl from '../UI/FormControl';
import Button from '../UI/Button';

const Form = () => {
	const [basic, setBasic] = useState({});
	const [advantage, setAdvantage] = useState({});
	const [chapters, setChapters] = useState({});
	const [quiz, setQuiz] = useState({});
	const [image, setImage] = useState('');
	const getBasic = e => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = {
			...basic,
		};
		newData[name] = value;
		setBasic(newData);
	};
	const getAdvantage = e => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = {
			...advantage,
		};
		newData[name] = value;
		setAdvantage(newData);
	};
	const getChapters = e => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = {
			...chapters,
		};
		newData[name] = value;
		setChapters(newData);
	};
	const getQuiz = e => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = {
			...quiz,
		};
		newData[name] = value;
		setQuiz(newData);
	};
	const getimg = e => {
		const value = e.target.value;
		setImage(value);
	};
	const submitData = e => {
		e.preventDefault();
		const data = {
			...basic,
			advantages: [advantage],
			chapters: [chapters],
			quiz: [quiz],
			image,
		};
		console.log(data);
	};
	return (
		<div className="bg-primary-color-dark flex items-center justify-center py-4">
			<div className="relative bg-white w-full mx-3 py-16 flex items-center justify-center rounded-xl sm:w-[60rem]">
				<form className="w-4/5 h-full" onSubmit={submitData}>
					<h2 className="text-center text-4xl font-semibold mb-12 sm:text-left">
						Create Course
					</h2>
					<div className="flex flex-col items-start gap-4 mb-8 sm:gap-6">
						<FormControl type="text" label="name" onChange={getBasic} />

						<div className={groupClass}>
							<FormControl type="text" label="tagline" onChange={getBasic} />
							<FormControl type="text" label="type" onChange={getBasic} />
						</div>
						<FormControl
							type="text"
							label="assignmentQuestion"
							onChange={getBasic}
						/>
						<div className={groupClass}>
							<FormControl type="number" label="price" onChange={getBasic} />
							<FormControl
								type="text"
								label="advantage"
								onChange={getAdvantage}
							/>
						</div>

						<FormControl
							type="text"
							label="chapter-name"
							onChange={getChapters}
						/>
						<div className={groupClass}>
							<FormControl
								type="number"
								label="chapter-number"
								onChange={getChapters}
							/>
							<FormControl
								type="text"
								label="chapter-video-link"
								onChange={getChapters}
							/>
						</div>
						<div className={groupClass}>
							<FormControl
								type="text"
								label="chapter-video-desc"
								onChange={getChapters}
							/>
							<FormControl
								type="text"
								label="chapter-study-material"
								onChange={getChapters}
							/>
						</div>

						<FormControl type="text" label="question" onChange={getQuiz} />
						<div className={groupClass}>
							<FormControl type="text" label="correct" onChange={getQuiz} />
							<FormControl type="text" label="incorrect" onChange={getQuiz} />
						</div>

						<FormControl type="text" label="image-link" onChange={getimg} />
						<FormControl
							type="textarea"
							label="description"
							onChange={getBasic}
							rows="5"
						/>
					</div>
					<Button type="submit" isWidthFull={true} isPrimary={true}>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};
export default Form;
