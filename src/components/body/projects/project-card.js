import React, { useState } from "react";
import "./project-card.css";
function ProjectCard({ project }) {
	function ImageChangeOnMouseOver({ primaryImg, link }) {
		return (
			<img
				src={require(`../../../assets/${primaryImg}`)}
				alt=""
				className="project-photo project-photo-box"
				onClick={() => {
					window.open(link);
				}}
			/>
		);
	}
	function VideoOnMouseOver({ Vid, link }) {
		return (
			<video
				autoPlay={true}
				loop={true}
				muted
				preload="auto"
				className="project-photo project-photo-box"
				onClick={() => {
					window.open(link);
				}}>
				<source src={require(`../../../assets/${Vid}`)} />
			</video>
		);
	}
	const [readmore, setmode] = useState(false);
	return (
		<div className={`project-card ${project.id % 2 ? "reverse-order-project" : ""}`}>
			<div className="">{project.video ? <VideoOnMouseOver Vid={project.video} link={project.prototype} /> : <ImageChangeOnMouseOver primaryImg={project.image} link={project.prototype} />}</div>
			<div className="project-info">
				<label className="project-title">{project.title}</label>
				<div className="project-links">
					{project.prototype && (
						<a className="project-link" href={project.prototype} target="_blank" rel="noreferrer">
							<div className="link-button" style={{ backgroundColor: project.colors[0] }}>
								<i className="fi-rr-globe"></i>Prototype
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
					{project.videoLink && (
						<a className="project-link" href={project.videoLink} target="_blank" rel="noreferrer">
							<div className="link-button" style={{ backgroundColor: "#f08080" }}>
								<img height={16} alt="" src={"https://cdn-icons-png.flaticon.com/512/1077/1077046.png"} />
								Video
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
