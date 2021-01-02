import { Link } from "react-router-dom";
function Menu() {
	return (
		<section className="body" id="menu">
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
