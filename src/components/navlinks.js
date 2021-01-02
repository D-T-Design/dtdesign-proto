function NavLinks() {
	return (
		<div className="links">
			<button>
				Download Resume <img src="/img/pdf.svg" alt="Click Here" />
			</button>
			<div className="social">
				<button href="#">
					<img src="/img/linkedin.svg" alt="" />
				</button>
				<button href="#">
					<img src="/img/github.svg" alt="" />
				</button>
				<button href="#">
					<img src="/img/stackoverflow.svg" alt="" />
				</button>
			</div>
		</div>
	);
}

export default NavLinks;
