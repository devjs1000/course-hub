import React from 'react';

function FormControl({ type, label, onChange }) {
	return (
		<div className="relative top-0 left-0 w-full">
			<input
				type={type}
				className="form-input border border-slate-300 w-full py-3 px-4 rounded-md bg-transparent hover:border-primary-color-dark focus:outline-none"
				id={type}
				autoComplete="off"
				placeholder=" "
				onChange={onChange}
				name={label}
				required
			/>
			<label
				htmlFor={type}
				className="form-label text-slate-700 absolute left-3 top-[0.7rem] transition-all duration-300 px-2 bg-white"
			>
				{`${label.slice(0, 1).toUpperCase()}${label.slice(1, label.length)}`}
			</label>
		</div>
	);
}

export default FormControl;
