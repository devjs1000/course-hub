import React from 'react';
import author from '../../images/author.jpg';

const Notification = () => {
	return (
		<div className="flex items-center gap-4 p-2">
			<div className="flex-[0.1]">
				<div
					className="h-20 w-20 rounded-full outline-offset-2 outline outline-slate-400 bg-cover bg-center"
					style={{ backgroundImage: `url(${author})` }}
				></div>
			</div>
			<div className="text-slate-900 flex flex-col items-start gap-2 flex-[0.9]">
				<p className="font-semibold text-md">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
					quisquam sunt minima iste. Iusto, sapiente. Doloribus, facilis
					dignissimos.
				</p>
				<span>2 days ago</span>
			</div>
		</div>
	);
};

function Notifications() {
	return (
		<div className="px-16">
			<h2>Notifications</h2>

			<div className="h-60vh shadow-md mt-12 bg-white py-4 px-6 flex flex-col gap-4 ">
				<Notification />
				<Notification />
				<Notification />
			</div>
		</div>
	);
}

export default Notifications;
