import Heading from "./ui/heading";
import { Helmet } from "react-helmet";
import { Facebook, LinkedIn, Email, Phone } from "./ui/icons";

const contactInfo = {
	heading: "Contact David Torres",
	phone: "7024730606",
	email: "info@davidtorres.design",
	social: [
		{
			title: "Facebook - David Torres Design",
			url: "http://www.facebook.com/davidtorresdesign",
			component: Facebook,
		},
		{
			title: "LinkedIn - David Torres Design",
			url: "http://www.linkedin.com/in/davidtorresdesign",
			component: LinkedIn,
		},
	],
};

function Contact() {
	let phone = contactInfo.phone;
	return (
		<section className="body" id="contact">
			<Helmet>
				<title>Contact David Torres for Web Design and Development</title>
				<meta
					name="description"
					content="Contact me for help building, maintaining, fixing, or updating your website."
				/>
			</Helmet>
			<Heading rank={1} text={contactInfo.heading} type="headline" />
			<div className="col">
				<a href={`tel:${phone}`} className="contact-links" target="_blank" rel="noreferrer">
					<Phone />
					{phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
				</a>
			</div>
			<div className="col">
				<a
					href={`mailto:${contactInfo.email}`}
					className="contact-links"
					target="_blank"
					rel="noreferrer"
				>
					<Email />
					{contactInfo.email}
				</a>
			</div>
			<div className="col">
				<p className="center">Message on Social</p>
				<div className="social-links">
					{contactInfo.social.map((social, index) => (
						<a href={social.url} target="_blank" rel="noreferrer">
							<social.component />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default Contact;
