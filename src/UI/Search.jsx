import React from 'react';
import { Search } from 'react-bootstrap-icons';

const Assignment = ({ value, placeholder, onChange, onSearch }) => {
	return (
		<div className="flex border items-center text-red-700 bg-white w-[16.5rem] hover:text-white hover:bg-red-700">
			<input
				className="py-1 outline-red-700 text-slate-700 pl-2"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<Search
				className="mx-2 transition-all h-[2rem]  w-[2rem]"
				onClick={onSearch}
			/>
		</div>
	);
};

export default Assignment;
