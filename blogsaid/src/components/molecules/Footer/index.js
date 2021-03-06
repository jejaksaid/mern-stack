import React from "react";
import { ICGithub, ICTwitter, ICYoutube, Logo } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
	return (
		<div className="icon-wrapper">
			<img className="icon-medsos" src={img} alt="icon" />
		</div>
	);
};

const Footer = () => {
	return (
		<div>
			<div className="footer">
				<div>
					<img className="logo" src={Logo} alt="logo" />
				</div>
				<div className="social-wrapper">
					<Icon img={ICYoutube} />
					<Icon img={ICTwitter} />
					<Icon img={ICGithub} />
				</div>
			</div>
			<div className="copyright">
				<p> &copy; Copyright | BlogSaid 2021 </p>
			</div>
		</div>
	);
};

export default Footer;
