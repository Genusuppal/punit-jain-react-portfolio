import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
	return (
		<div className="contact">
			<Separator />
			<label className="section-title">Let's Connect</label>
			<div className="contact-container">
				<div className="contact-left">
					<p>Want to get in touch? Contact me on any of the platform</p>
					<p>
						Email:{" "}
						<a href="mailto:punitja56@gmail.com">
							<b>punitja56@gmail.com</b>
						</a>
					</p>

					<SocialContact />
				</div>
			</div>
		</div>
	);
}

export default Contact;
