import React from "react";
import Shishiro_Botan from "../images/Shishiro_Botan.png";

const Home = () => {
	return (
		<main id="home">
			<div className="welcome-text">
				<h2>Welcome!</h2>
				<p>
				Shishiro Botan is a Virtual YouTuber under Hololive Production, a popular VTuber agency from Japan. She was introduced as one of the members from 5th Generation of Hololive Vtubers on 6 August 2020. Her Twitter account was created in April 2020, she made her first tweet on 6 August, and her YouTube channel was created on 12 April.
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
