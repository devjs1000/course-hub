import { Children } from 'react';

const navItems = [
	{ name: 'About', href: '#about' },
	{ name: 'Instructor', href: '#instructor' },
	{ name: 'Reviews', href: '#reviews' },
	{ name: 'FAQ', href: '#faq' },
];

function DetailsNavigation() {
	return (
		<nav className=" bg-white px-16 sticky top-0 border-b z-50">
			<ul className="flex items-center">
				{Children.toArray(
					navItems.map(item => (
						<li className="hover:bg-primary-color-dark hover:text-white">
							<a href={item.href} className="inline-block text-md px-5 py-4">
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
