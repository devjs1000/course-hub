import React from 'react';
import FooterLinks from './FooterLinks';

function Footer() {
	return (
		<footer className="px-8 py-10 bg-gray-900 text-slate-50 flex items-start gap-10 flex-wrap md:gap-16 lg:gap-32">
			<FooterLinks links={['About', 'Careers', 'Blogs']} />
			<FooterLinks
				links={[
					'Privacy policy',
					'Terms & Conditions',
					'Refund Policy',
					'Equal opportunity',
				]}
			/>
			<div className=" flex flex-col gap-2 md:ml-auto">
				<p className="uppercase">Made with love</p>
				<p className="text-sm text-slate-300">
					Xcitedu Software Solutions Pvt. Ltd, Delhi
				</p>
				<p className="text-sm text-slate-300">
					Copyright 2022. All Rights Reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer;
