import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
function SocialContact({ align = "center" }) {
	const data = SocialData;
	return (
		<div className="social-contact" style={{ "--alignment": align }}>
			<div className="social-icon-div">
				<a className="resume-link" href={"https://drive.google.com/file/d/1p-Gmhr-sR2cW3-ah51yQbZnbdE4SJfJ7/view?usp=sharing"} target="_blank" rel="noreferrer">
					Resume
				</a>
			</div>
			{data.map((item) => {
				return (
					<div className="social-icon-div">
						<a key={item.id} href={item.link}>
							<img src={item.icon} alt="" height={32} width={32} className="social-icon" />
						</a>
					</div>
				);
			})}
		</div>
	);
}

export default SocialContact;
