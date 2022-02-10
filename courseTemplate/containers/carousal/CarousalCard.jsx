import React from 'react';

function CarousalCard({ url, title, price, punchline }) {
	return (
		<div className="bg-white h-full w-full flex flex-col items-center justify-center p-8">
			<img src={url} alt="brand image" className="self-center object-contain h-6 w-36" />
			<div className="text-gray-700 flex flex-col items-center gap-2 my-6">
				<p className='font-bold'> {title}</p>
				<p> {punchline}</p>
				<p className='text-gray-600'> {price} </p>
				{/* <p className="mt-3">
					maximus tincidunt lacus, eget faucibus tellus gravida pharetra.
				</p> */}
			</div>
			<a href="#" className="link text-primary-color-dark font-bold relative">
				Enroll &#8594;
			</a>
		</div>
	);
}

export default CarousalCard;
