import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
function About() {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					Hello There ✋, I am,
					<br /> <span className="info-name">Punit Jain</span>.
					<br /> I am a Digital Marketing and Business Analyst.
				</div>
				<div className="about-photo">
					<img src={require("../../../assets/Photograph.jpeg")} className="picture" alt="Punit-Jain" />
				</div>
				{/* <Carousel>
					<div>
						<img src={require("../../../assets/Photograph1.jpeg")} />
						<p className="legend">Punit Jain</p>
					</div>
					<div>
						<img src={require("../../../assets/Photograph3.jpeg")} />
						<p className="legend">Punit Jain</p>
					</div>
				</Carousel> */}
			</div>
			<SocialContact />
		</div>
	);
}

export default About;
