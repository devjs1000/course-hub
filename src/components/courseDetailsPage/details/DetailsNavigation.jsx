import { Children } from 'react';

const navItems = [
	{ name: 'About', href: '#about' },
	{ name: 'Instructor', href: '#instructor' },
	{ name: 'Reviews', href: '#reviews' },
	{ name: 'FAQ', href: '#faq' },
];

function DetailsNavigation() {
	return (
		<nav className=" bg-[#f7f7f7] sticky top-0 z-50 flex items-center justify-center xsm:justify-start">
			<ul className="flex items-center">
				{Children.toArray(
					navItems.map(item => (
						<li className="hover:bg-white">
							<a
								href={item.href}
								className="inline-block text-sm px-4 py-4 xsm:px-5 sm:text-base"
							>
								{item.name}
							</a>
						</li>
					)),
				)}
			</ul>
		</nav>
	);
}

export default DetailsNavigation;
