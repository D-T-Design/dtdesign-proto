import Heading from "./ui/heading";
function About() {
	return (
		<section className="body" id="about">
			<div className="col">
				<Heading rank={1} text={"About David Torres"} type="headline" />
				<p>
					I’m a web specialist with over 10 years of experience. I help businesses plan and execute
					online strategies utilizing modern web technology to achieve their goals. I enjoy
					collaborating with like-minded creative professionals to deliver results that “Wow!”
				</p>
				<p>
					Browse my portfolio to see my work and style, contact me if you want to work with me to
					achieve your digital goals!
				</p>
			</div>
			<div className="col">
				<img src="/img/img.svg" alt="" />
				<img src="/img/img.svg" alt="" />
				<img src="/img/img.svg" alt="" />
				<img src="/img/img.svg" alt="" />
			</div>
		</section>
	);
}

export default About;
