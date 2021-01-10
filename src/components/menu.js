import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Menu() {
	return (
		<section className="body" id="menu">
			<Helmet>
				<title>Browse my Web Design and Development Portfolio - David Torres Design</title>
				<meta
					name="description"
					content="Learn more about me, including what kind of work I do, who I am, and how to contact me."
				/>
			</Helmet>
			<ul className="nav-list">
				<li>
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/work" className="nav-link">
						My Work
					</Link>
				</li>
				<li>
					<Link to="/about" className="nav-link">
						About
					</Link>
				</li>
				<li>
					<Link to="/contact" className="nav-link">
						Contact
					</Link>
				</li>
			</ul>
		</section>
	);
}

export default Menu;
