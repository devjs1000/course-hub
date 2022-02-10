import React from 'react';

const FooterLinks = ({ links }) => {
	return (
		<ul className="flex flex-col items-start gap-2">
			{React.Children.toArray(
				links.map(link => {
					return (
						<li>
							<a href="#" className="uppercase">
								{link}
							</a>
						</li>
					);
				}),
			)}
		</ul>
	);
};

export default FooterLinks;
