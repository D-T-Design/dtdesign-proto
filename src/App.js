import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Project from "./components/project";
import Menu from "./components/menu";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";

const history = createBrowserHistory();
wrapHistory(history);

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/work",
		component: Work,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/contact",
		component: Contact,
	},
	{
		path: "/work/project",
		component: Project,
	},
	{
		path: "/work/project1",
		component: Project,
	},
	{
		path: "/work/project2",
		component: Project,
	},
	{
		path: "/work/project3",
		component: Project,
	},
	{
		path: "/menu",
		component: Menu,
	},
];

function App() {
	return (
		<div className="App">
			<div className="container">
				<Router history={history}>
					<Nav routes={routes}></Nav>
					<Switch>
						{routes.map((route, i) => (
							<Route exact key={i} {...route} />
						))}
					</Switch>
				</Router>
				<Footer />
			</div>
		</div>
	);
}

export default App;
