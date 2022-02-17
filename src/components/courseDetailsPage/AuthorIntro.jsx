import Button from '../../UI/Button';
import authorImg from '../../images/author.png';

function AuthorIntro() {
	return (
		<section className="section-step mt-16 pb-16 px-16 flex flex-col items-start gap-10 sm:items-center lg:flex-row">
			<img
				src={authorImg}
				alt="people sitting and laughing"
				className="rounded-md  min-w-[30vw]"
			/>
			<div className="flex flex-col sm:items-center lg:order-2 lg:items-start">
				<h3 className="heading-gradient text-2xl font-semibold mb-2 xsm:text-3xl sm:text-center lg:text-left lg:text-4xl">
					“Take the next step toward your personal and professional goals with
					XcitEducation”
				</h3>
				<span className="italic text-gray-600">&#8212;Arundhati Roy</span>
				<div className="text-white flex items-center gap-4 mt-8 lg:mt-16">
					<Button isPrimary={true}>Enroll</Button>
					<Button isOutline={true} textPrimary={true}>
						Learn More
					</Button>
				</div>
			</div>
		</section>
	);
}

export default AuthorIntro;
