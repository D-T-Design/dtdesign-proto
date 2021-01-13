import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Heading from "./ui/heading";

const skills = [
	{ id: "photoshop", title: "Adobe Photoshop" },
	{ id: "xd", title: "Adobe XD" },
	{ id: "ai", title: "Adobe Illustrator" },
	{ id: "shopify", title: "Shopify" },
	{ id: "react", title: "ReactJS" },
	{ id: "html", title: "HTML5" },
	{ id: "css", title: "CSS3" },
	{ id: "js", title: "JavaScript" },
];

function Home() {
	return (
		<section className="body" id="home">
			<div className="col">
				<section id="header">
					<Heading rank={1} text={"David Torres"} type="headline" />
					<Heading rank={2} text={"Web Designer and Developer"} type="subtitle" />
					<p>
						I’m a web specialist with over 10 years of experience. I help businesses plan and
						execute online strategies utilizing modern web technology to achieve their goals. I
						enjoy collaborating with like-minded creative professionals to deliver results that
						“Wow!”
					</p>
					<p>
						Browse my portfolio to see my work and style,{" "}
						<Link to="/contact">
							contact me if you want to work with me to achieve your digital goals!
						</Link>
					</p>
				</section>

				<section id="skills">
					<Heading rank={2} text={"Skills and Technology"} type="headline" />
					<div className="skills">
						{skills.map((skill, index) => (
							<div className="skill-container" data-tip data-for={skill.id} key={index}>
								<img src={`/img/${skill.id}.svg`} alt={skill.title} />
								<ReactTooltip id={skill.id} place="bottom" effect="float">
									{skill.title}
								</ReactTooltip>
							</div>
						))}
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
