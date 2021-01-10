import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Project(props) {
	let data = props.data;
	let location = props.location.pathname;
	let projectData = data.find((project) => project.data.path === location).data;
	return (
		<section className="body" id="project">
			<Helmet>
				<title>{projectData.title} - David Torres Web Project</title>
				<meta name="description" content={projectData.description} />
			</Helmet>

			<div className="grid">
				<h1>{projectData.title}</h1>

				<section className="project-links">
					<button>Link</button>
					<button>Code</button>
				</section>

				<section className="project-content">
					<p>{projectData.description}</p>
					<h2>Tech Used</h2>
					<ul>
						{projectData.tech.map((text, index) => (
							<li key={index}>{text}</li>
						))}
					</ul>
				</section>

				<section className="project-photos">
					<img src="/img/img.svg" alt="" />
					<img src="/img/img.svg" alt="" />
					<img src="/img/img.svg" alt="" />
				</section>

				<section className="project-back">
					<Link to="/work" className="project-back">
						<span>
							<img src="/img/arrow-l.svg" alt="" />
						</span>
						Back To My Work
					</Link>
				</section>
			</div>
		</section>
	);
}

export default Project;
