import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
	return (
		<main id="construction">
			<h1 className="subheading">Under Construction</h1>
			<Link to="/">
				<button className="button_404" type="button">
					Go Home
				</button>
			</Link>
			<p style={{ textAlign: "center" }}>
				<img
					className="cones_404"
					src="https://i.imgur.com/qIufhof.png"
					alt="404_cones"
				/>
			</p>
		</main>
	);
};

export default UnderConstruction;
