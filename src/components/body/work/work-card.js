import React, { useState } from "react";
import "./work-card.css";
function WorkCard({ work }) {
	function ImageChangeOnMouseOver({ primaryImg, colors }) {
		return <img src={require(`../../../assets/${primaryImg}`)} alt="" className="work-photo work-photo-box" style={{ "--grad_color_1": colors[0], "--grad_color_2": colors[1], "--grad_color_3": colors[2] }} />;
	}
	function VideoOnMouseOver({ Vid, colors }) {
		return (
			<video autoPlay={true} loop={true} muted preload="auto" className="work-photo work-photo-box" style={{ "--grad_color_1": colors[0], "--grad_color_2": colors[1], "--grad_color_3": colors[2] }}>
				<source src={require(`../../../assets/${Vid}`)} />
			</video>
		);
	}
	const [readmore, setmode] = useState(false);
	return (
		<div>
			<section className="work-title">
				<div>
					<label>{work.company}</label>
					{work.location && <p>Location: {work.location}</p>}
				</div>
				<div>
					<p style={{ fontStyle: "italic" }}>{work.position}</p>
					{work.duration && <p style={{ fontStyle: "italic" }}>{work.duration}</p>}
				</div>
			</section>
			<section className={`work-card ${work.id % 2 ? "reverse-order-work" : ""}`}>
				<div className="">{work.video ? <VideoOnMouseOver Vid={work.video} colors={work.colors} /> : <ImageChangeOnMouseOver primaryImg={work.image} colors={work.colors} />}</div>
				<div className="work-info">
					<div className="work-links">
						{work.certificate && (
							<a className="work-link" href={work.certificate} target="_blank" rel="noreferrer">
								<div className="link-button" style={{ backgroundColor: work.colors[0] }}>
									<i className="fi-rr-globe"></i>Certificate
								</div>
							</a>
						)}
					</div>
					<p style={{ whiteSpace: "pre-line" }}>
						{work.about}{" "}
						{work.description && (
							<a
								style={{ fontSize: 14, color: work.colors[1] }}
								href="#read-more"
								onClick={() => {
									setmode(!readmore);
								}}>
								Read {readmore ? "Less" : "More"}...
							</a>
						)}
					</p>
					{readmore && <p style={{ fontSize: 13, color: "#5f5f5f" }}>{work.description}</p>}
				</div>
			</section>
		</div>
	);
}

export default WorkCard;
