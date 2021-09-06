import React from "react";
import botanForeground from "../images/botan.png";
import title from "../images/botan.svg";

const Home = () => {
	return (
		<main id="home">
			<div className="home-header">
				<img className="welcome-header" src={title} alt="SHISHIRO BOTAN" />
				<div className="welcome-text-wrapper">
					<div className="welcome-text">
						<h2>Welcome!</h2>
						<p>
							Shishiro Botan is a Virtual YouTuber under Hololive Production, a
							popular VTuber agency from Japan. She was introduced as one of the
							members from 5th Generation of Hololive Vtubers on 6 August 2020.
							Her Twitter account was created in April 2020, she made her first
							tweet on 6 August, and her YouTube channel was created on 12
							April.
						</p>
					</div>
				</div>
				<div className="botan-img-container">
					<img
						className="botan-img"
						src={botanForeground}
						alt="A full body shot of Botan in her original outfit."
					/>
				</div>
			</div>
			<section>
				<h2 className="title">Current Project</h2>
			</section>
		</main>
	);
};

export default Home;
