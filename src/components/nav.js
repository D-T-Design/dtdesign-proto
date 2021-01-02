import NavLinks from "./navlinks";
import NavMenu from "./navmenu";
import {Link} from "react-router-dom";

function Nav() {
	return (
		<section className="nav">
			<div className="logo">
				<Link to="/">
					<img src="/img/logo.svg" alt="David Torres Design" />
				</Link>
			</div>
			<NavMenu />
			<NavLinks />
		</section>
	);
}

export default Nav;