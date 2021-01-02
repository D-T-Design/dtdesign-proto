function Contact() {
	return (
		<section className="body" id="contact">
			<h1>Contact David Torres</h1>
			<div className="col">
				<a href="tel:7024730606" className="contact-links">
					<img src="/img/phone.svg" alt="" />
					702-473-0606
				</a>
			</div>
			<div className="col">
				<a href="mailto:info@davidtorres.design" className="contact-links">
					<img src="/img/email.svg" alt="" />
					info@davidtorres.design
				</a>
			</div>
			<div className="col">
				<p className="center">Message on Social</p>
				<div className="social-links">
					<a href="http://www.facebook.com/davidtorresdesign">
						<img src="/img/fb.svg" alt="" />
					</a>
					<a href="http://www.linkedin.com/in/davidtorresdesign">
						<img src="/img/linkedin-w.svg" alt="" />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
