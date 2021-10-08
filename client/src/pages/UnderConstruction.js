import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
	return (
		<main id="construction">
			<h1 className="subheading">This Page Is Not Ready Yet!</h1>
			<h1 className="subheading">Check Back Soon!</h1>
			<Link to="/">
				<button className="button_404" type="button">
					Go Home
				</button>
			</Link>
			<img
				className="cones_404"
				src="https://i.imgur.com/qIufhof.png"
				alt="404_cones"
			/>
		</main>
	);
};

export default UnderConstruction;
