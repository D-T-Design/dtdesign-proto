import { Link } from "react-router-dom";
function Home() {
	return (
		<section className="body" id="home">
			<div className="col">
				<section id="header">
					<h1>Web Designer and Developer</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam vel dolor
						mollis semper. Nulla consectetur maximus commodo. Sed consectetur mauris id ipsum
						blandit sagittis.
					</p>
				</section>
				<section id="skills">
					<h2>Skills and Technology</h2>
					<div className="skills">
						<img src="/img/circle.svg" alt="" />
						<img src="/img/circle.svg" alt="" />
						<img src="/img/circle.svg" alt="" />
						<img src="/img/circle.svg" alt="" />
						<img src="/img/circle.svg" alt="" />
						<img src="/img/circle.svg" alt="" />
						<img src="/img/circle.svg" alt="" />
						<img src="/img/circle.svg" alt="" />
					</div>
				</section>
			</div>
			<div className="col">
				<section id="projects">
					<h2>View My Projects</h2>
					<Link to="/work">
						<img src="/img/photo.svg" alt="" />
					</Link>
				</section>
			</div>
		</section>
	);
}

export default Home;
