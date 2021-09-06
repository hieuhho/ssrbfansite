import React from "react";
import { Link } from "react-router-dom";
import botanForeground from "../images/botan.png";
import title from "../images/botan.svg";
import { MenuItems } from "../components/navbar/MenuItems";

var latestProject = MenuItems[0];

const Home = () => {
	return (
		<main id="home">
			<div className="home-header">
				<img className="welcome-header" src={title} alt="SHISHIRO BOTAN" />
				<div className="welcome-text-wrapper">
					<svg
						data-name="slantTop"
						class="slant top"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1 1"
						preserveAspectRatio="none"
					>
						<path d="M0 0v1h1L0 0z" />
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
						data-name="slantBottom"
						class="slant bottom"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1 1"
						preserveAspectRatio="none"
					>
						<path d="M0 0h1v1L0 0z" />
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
			<section class="latest-project">
				<h2 className="subheading">Latest Project</h2>
				<Link className="project" to={latestProject.path}>
					<img src={latestProject.img} alt="project_img" />
					<h2 className="project-heading">{latestProject.title}</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>{latestProject.desc}</p>
						</div>
					</div>
				</Link>
			</section>
		</main>
	);
};

export default Home;
