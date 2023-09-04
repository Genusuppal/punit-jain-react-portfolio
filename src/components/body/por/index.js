import React from "react";
import "./por.css";
import Separator from "../../common/separator";
import { PORData } from "../../data/pors";
import PORCard from "./por-card";
function POR() {
	const data = PORData;
	return (
		<div className="por">
			<Separator />
			<label className="section-title">Positions of Responsibility</label>
			<div className="por-list">
				{data.map((item) => {
					return <PORCard item={item} />;
				})}
			</div>
		</div>
	);
}

export default POR;
