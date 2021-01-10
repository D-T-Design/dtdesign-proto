import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Project from "./components/project";
import Menu from "./components/menu";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import { AnimatedSwitch } from "react-router-transition";
import { Helmet } from "react-helmet";

const history = createBrowserHistory();
wrapHistory(history);

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/work",
		render: (props) => <Work {...props} data={projects} isAuthed={true} />,
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
		path: "/work/srtservices",
		render: (props) => <Project {...props} data={projects} isAuthed={true} />,
	},
	{
		path: "/work/project2",
		render: (props) => <Project {...props} data={projects} isAuthed={true} />,
	},
	{
		path: "/work/project3",
		render: (props) => <Project {...props} data={projects} isAuthed={true} />,
	},
	{
		path: "/menu",
		component: Menu,
	},
];
const projects = [
	{
		img: "/img/project-gif.svg",
		data: {
			title: "S-R-T Services, Inc. Website",
			path: "/work/srtservices",
			linkURL: "#",
			codeURL: "#",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vel sequi necessitatibus laborum, rerum error unde facilis possimus corrupti quo quam, omnis animi aliquid praesentium in pariatur eum voluptates ut.",
			tech: ["HTML", "CSS", "JS"],
			images: ["img.svg"],
		},
	},
	{
		img: "/img/project-gif.svg",
		data: {
			title: "Project #2",
			path: "/work/project2",
			linkURL: "#",
			codeURL: "#",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vel sequi necessitatibus laborum, rerum error unde facilis possimus corrupti quo quam, omnis animi aliquid praesentium in pariatur eum voluptates ut.",
			tech: ["HTML", "CSS"],
			images: ["img.svg"],
		},
	},
	{
		img: "/img/project-gif.svg",
		data: {
			title: "Project #3",
			path: "/work/project3",
			linkURL: "#",
			codeURL: "#",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vel sequi necessitatibus laborum, rerum error unde facilis possimus corrupti quo quam, omnis animi aliquid praesentium in pariatur eum voluptates ut.",
			tech: ["HTML", "CSS"],
			images: ["img.svg"],
		},
	},
];

function App() {
	return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>David Torres - Web Designer and Developer</title>
				<meta
					name="description"
					content="Web specialist with over 10 years of experience.  Use modern technology to achieve your web goals!"
				/>
			</Helmet>
			<div className="container">
				<Router history={history}>
					<Nav routes={routes}></Nav>
					<AnimatedSwitch
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
						className="switch-wrapper"
					>
						{routes.map((route, i) => (
							<Route exact key={i} {...route} />
						))}
					</AnimatedSwitch>
				</Router>
				<Footer />
			</div>
		</div>
	);
}

export default App;
