import { Link, useLocation } from "react-router-dom";
function NavMenu() {
	let location = useLocation().pathname;
	const routes = [
		{
			path: "/",
			text: "Home",
		},
		{
			path: "/work",
			text: "My Work",
		},
		{
			path: "/about",
			text: "About",
		},
		{
			path: "/contact",
			text: "Contact",
		},
	];
	return (
		<>
			<div className="menu-small">
				<Link to="/menu">
					<img src="/img/menu.svg" alt="Menu" />
				</Link>
			</div>
			<div className="menu-large">
				<ul className="nav-list">
					{routes.map((route, i) => (
						<li key={i}>
							<Link
								to={route.path}
								className={`nav-link${location === route.path ? " current" : ""}`}
							>
								{route.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default NavMenu;
