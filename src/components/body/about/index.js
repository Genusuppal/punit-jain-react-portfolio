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
					Hello There ✋, Myself,
					<br /> <span className="info-name">Punit Jain</span>
					<br /> your Friendly Neighborhood Marketeer & Business Analyst
					<SocialContact align={"left"} />
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
		</div>
	);
}

export default About;
