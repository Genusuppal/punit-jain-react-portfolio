import React from "react";
import "./body.css";
import About from "./about/index";
import Works from "./work/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import POR from "./por/index";
import Contact from "./contact/index";

function Body() {
	return (
		<div className="body">
			<section id="about">
				<About />
			</section>
			<section id="experience">
				<Works />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="pors">
				<POR />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

export default Body;
