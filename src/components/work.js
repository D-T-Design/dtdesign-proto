import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";
import { LinkIcon } from "./ui/icons";

function Work(props) {
	let data = props.data;
	return (
		<section className="body" id="work">
			<Helmet>
				<title>My Web Design and Development Portfolio - David Torres Design</title>
				<meta
					name="description"
					content="Check out my work from happy clients and personal projects."
				/>
			</Helmet>
			<div className="col">
				<h1>My Design Work</h1>
				{data.map((project, i) => (
					<div className="project-thumb" key={i}>
						<h2>{project.data.title}</h2>
						<img src={project.img} alt="" />
						<div className="project-links">
							<Link to={project.data.path}>
								<button className="cta">View More</button>
							</Link>
							<button className="subtle">
								Live Version <LinkIcon />
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Work;
