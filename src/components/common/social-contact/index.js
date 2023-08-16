import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
function SocialContact() {
	const data = SocialData;
	return (
		<div className="social-contact">
			<div className="resume-link">
				<a href={require("../../../assets/RESUME.pdf")} target="_blank" rel="noreferrer">
					Résumé
				</a>
			</div>
			{data.map((item) => {
				return (
					<a key={item.id} href={item.link}>
						<div className="social-icon-div">
							<img src={item.icon} alt="" className="social-icon" />
						</div>
					</a>
				);
			})}
		</div>
	);
}

export default SocialContact;
