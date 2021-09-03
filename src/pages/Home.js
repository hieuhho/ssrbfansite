import React from "react";
import Shishiro_Botan from "../images/Shishiro_Botan.png";

const Home = () => {
	return (
		<main id="home">
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
					src={Shishiro_Botan}
					alt="A full body shot of Botan in her original outfit."
				/>
			</div>
		</main>
	);
};

export default Home;
