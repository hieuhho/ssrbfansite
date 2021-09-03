import React from "react";
import Shishiro_Botan from "../images/Shishiro_Botan.png";

const Home = () => {
	return (
		<main className="home">
			<div className="botan_wrapper">
				<img className="botan_img" src={Shishiro_Botan} alt="botan_img" />
				<div className="desc_text">
					<p className="botan_info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						luctus ipsum et finibus faucibus. Phasellus eu sodales elit.
						Pellentesque sed porttitor lectus. Proin et nisl elementum, cursus
						nisl at, feugiat lacus.
					</p>
				</div>
			</div>
		</main>
	);
};

export default Home;
