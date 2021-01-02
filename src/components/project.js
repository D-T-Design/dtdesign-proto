import { Link } from "react-router-dom";
function Project() {
	return (
		<section className="body fade" id="project">
			<div className="grid">
				<h1>Project Title</h1>
				<section className="project-links">
					<button>Link</button>
					<button>Code</button>
				</section>
				<section className="project-content">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vel sequi
						necessitatibus laborum, rerum error unde facilis possimus corrupti quo quam, omnis animi
						aliquid praesentium in pariatur eum voluptates ut.
					</p>
					<h2>Tech Used</h2>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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
