import author from '../../../assets/images/author.jpg';

function AuthorIntro() {
	const backgroundImage = `h-28 w-28 border rounded-full bg-no-repeat bg-cover bg-center outline-offset-2 outline outline-slate-300`;

	return (
		<section className="mt-24 h-" id="instructor">
			<h2 className="uppercase font-semibold text-lg">Instructor</h2>

			<div className="my-4 flex items-center gap-6">
				<div
					className={backgroundImage}
					style={{ backgroundImage: `url(${author})` }}
				>
					&nbsp;
				</div>
				<div className="outline-o">
					<h6 className="text-lg font-semibold">John Wick</h6>
					<p className="text-sm">Professional Killer, dog lover</p>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
				provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Quia, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Molestias, nam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Vitae, distinctio.
			</p>
		</section>
	);
}

export default AuthorIntro;
