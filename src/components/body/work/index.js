import React from "react";
import Separator from "../../common/separator";
import { WorkData } from "../../data/works";
import WorkCard from "./work-card";
import "./works.css";
function Works() {
	const data = WorkData;
	return (
		<div className="works">
			<Separator />
			<label className="section-title">Experience</label>
			<div>
				{data.map((work) => {
					return <WorkCard key={work.id} work={work} />;
				})}
			</div>
		</div>
	);
}

export default Works;
