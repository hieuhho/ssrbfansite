import React from "react";
import botanForeground from "../images/botan.png";
import title from "../images/botan.svg";

const Home = () => {
	return (
		<main id="home">
			<div className="home-header">
				<img className="welcome-header" src={title} alt="SHISHIRO BOTAN" />
				<div className="welcome-text-wrapper">
					<svg
						id="slantTop"
						data-name="slantTop"
						class="slant top"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						viewBox="0 0 56.47 52.35"
					>
						<polygon points="0 0 0 52.35 56.47 52.35 0 0" />
					</svg>
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
					<svg
						id="slantBottom"
						data-name="slantBottom"
						class="slant bottom"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 56.47 52.35"
						preserveAspectRatio="none"
					>
						<polygon points="0 0 0 52.35 56.47 52.35 0 0" />
					</svg>
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
