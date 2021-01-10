import Heading from "./ui/heading";
const contactInfo = {
	heading: "Contact David Torres",
	phone: "7024730606",
	email: "info@davidtorres.design",
	social: [
		{
			title: "Facebook - David Torres Design",
			url: "http://www.facebook.com/davidtorresdesign",
			img: "/img/fb.svg",
		},
		{
			title: "LinkedIn - David Torres Design",
			url: "http://www.linkedin.com/in/davidtorresdesign",
			img: "/img/linkedin-w.svg",
		},
	],
};
function Contact() {
	let phone = contactInfo.phone;
	return (
		<section className="body" id="contact">
			<Heading rank={1} text={contactInfo.heading} type="headline" />
			<div className="col">
				<a href={`tel:${phone}`} className="contact-links">
					<img src="/img/phone.svg" alt="Give me a call and let's talk!" />
					{phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
				</a>
			</div>
			<div className="col">
				<a href={`mailto:${contactInfo.email}`} className="contact-links">
					<img src="/img/email.svg" alt="Send me a message and I will get back to you." />
					{contactInfo.email}
				</a>
			</div>
			<div className="col">
				<p className="center">Message on Social</p>
				<div className="social-links">
					{contactInfo.social.map((social, index) => (
						<a href={social.url}>
							<img src={social.img} alt={social.title} />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default Contact;
