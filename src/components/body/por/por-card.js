import React from "react";
import "./por-card.css";
function PORCard({ item }) {
	return (
		<div className="por-card">
			<img src={require(`../../../assets/${item.companyLogo}`)} alt={"company-logo"} className="por-logo" />
			<div className="por-info">
				<label className="company-name">{item.company}</label>
				<div className="por-dates">
					<label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
				</div>
				<div className="por-desc">
					<p>{item.work}</p>
				</div>
			</div>
		</div>
	);
}

export default PORCard;
