import React, { useState } from "react";
import "./project-card.css";
function ProjectCard({ project }) {
	function ImageChangeOnMouseOver({ primaryImg }) {
		return <img src={require(`../../../assets/${primaryImg}`)} alt="" className="project-photo project-photo-box" />;
	}
	function VideoOnMouseOver({ Vid }) {
		return (
			<video autoPlay={true} loop={true} muted preload="auto" className="project-photo project-photo-box">
				<source src={require(`../../../assets/${Vid}`)} />
			</video>
		);
	}
	const [readmore, setmode] = useState(false);
	return (
		<div className={`project-card ${project.id % 2 ? "reverse-order" : ""}`}>
			<div className="">{project.video ? <VideoOnMouseOver Vid={project.video} /> : <ImageChangeOnMouseOver primaryImg={project.image} />}</div>
			<div className="project-info">
				<label className="project-title">{project.title}</label>
				<div className="project-links">
					{project.demo && (
						<a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
							<div className="link-button" style={{ backgroundColor: project.colors[0] }}>
								<i className="fi-rr-globe"></i>Demo
							</div>
						</a>
					)}
					{project.github && (
						<a className="project-link" href={project.github} target="_blank" rel="noreferrer">
							<div className="link-button" style={{ backgroundColor: project.colors[0] }}>
								<i className="devicon-github-original colored"></i>Github
							</div>
						</a>
					)}
				</div>
				<p>
					{project.about}{" "}
					{project.description && (
						<a
							style={{ fontSize: 14, color: project.colors[1] }}
							href="#read-more"
							onClick={() => {
								setmode(!readmore);
							}}>
							Read {readmore ? "Less" : "More"}...
						</a>
					)}
				</p>
				{readmore && <p style={{ fontSize: 13, color: "#5f5f5f" }}>{project.description}</p>}
				{project.tags && (
					<div className="project-tags">
						{project.tags.map((tag, index) => {
							return (
								<label key={index} className="tag" style={{ backgroundColor: project.colors[2] }}>
									{tag}
								</label>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
