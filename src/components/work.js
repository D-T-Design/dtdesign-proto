import { Link } from "react-router-dom";
import React from "react";

function Work(props) {
	let data = props.data;
	return (
		<section className="body" id="work">
			<div className="col">
				<h1>My Design Work</h1>
				{data.map((project, i) => (
					<div className="project-thumb" key={i}>
						<h2>{project.data.title}</h2>
						<img src={project.img} alt="" />
						<div className="project-links">
							<Link to={project.data.path}>
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
