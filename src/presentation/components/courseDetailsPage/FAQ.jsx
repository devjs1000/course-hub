import Accordion from './accordion/Accordion';

function FAQ() {
	return (
		<section className="mt-24" id="faq">
			<h2 className="uppercase font-semibold text-lg">
				Frequently Asked Questions
			</h2>
			<div className="mt-4 flex flex-col gap-2">
				<Accordion />
				<Accordion />
				<Accordion />
				<Accordion />
			</div>
		</section>
	);
}

export default FAQ;
