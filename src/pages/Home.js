import React from "react";
import botanForeground from "../images/botan.png";
import title from "../images/botan.svg";

const Home = () => {
	return (
		<main id="home">
			<img className="welcome-header" src={title} alt="SHISHIRO BOTAN" />
			<div className="welcome-text">
				<h2>Welcome!</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
					ipsum et finibus faucibus. Phasellus eu sodales elit. Pellentesque sed
					porttitor lectus. Proin et nisl elementum, cursus nisl at, feugiat
					lacus.
				</p>
			</div>
			<div className="botan-img-container">
				<img
					className="botan-img"
					src={botanForeground}
					alt="A full body shot of Botan in her original outfit."
				/>
			</div>
		</main>
	);
};

export default Home;
