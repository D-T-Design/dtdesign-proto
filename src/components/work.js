import { Link } from "react-router-dom";

const projects = [
	{
		path: "/work/project1",
		title: "Project #1",
		img: "/img/project-gif.svg",
	},
	{
		path: "/work/project2",
		title: "Project #2",
		img: "/img/project-gif.svg",
	},
	{
		path: "/work/project3",
		title: "Project #3",
		img: "/img/project-gif.svg",
	},
];
function Work() {
	return (
		<section className="body fade" id="work">
			<div className="col">
				<h1>My Design Work</h1>
				{projects.map((project, i) => (
					<div className="project-thumb" key={i}>
						<h2>{project.title}</h2>
						<img src={project.img} alt="" />
						<div className="project-links">
							<Link to={project.path}>
								<button>Link</button>
							</Link>
							<button>Code</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Work;
