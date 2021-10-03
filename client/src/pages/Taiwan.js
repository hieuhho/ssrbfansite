import React from "react";
import { Link } from "react-router-dom";

const Taiwan = () => {
	return (
		<main id="taiwan_anniversary">
			<h1 className="title">Taiwanese Milestone Projects</h1>

			{/* SHISHIRO BUSTAN */}
			<div className="projects-container">
				<Link className="project" to="/taiwan2">
					<img
						src="https://www.thefeatherstudio.com/assets/img/project-5thAnniversary/hololive5th.jpg"
						alt="project_img"
					/>
					<h2 className="project-heading">Texture Pack</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>NePoLaBo Minecraft Texture Pack</p>
						</div>
					</div>
				</Link>
			</div>

			{/* MINECRAFT TEXTURE PACK */}
			<div className="projects-container">
				<Link className="project" to="/bustan">
					<img src="https://i.imgur.com/miowk7H.png" alt="project_img" />
					<h2 className="project-heading">Shishiro Bustan</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>Botan on a bus, Bustan</p>
						</div>
					</div>
				</Link>
			</div>

			{/* FAN LETTER IMAGES */}
			<div className="projects-container">
				<Link className="project" to="/taiwan_messages">
					<img src="https://i.imgur.com/miowk7H.png" alt="project_img" />
					<h2 className="project-heading">Messages</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>Fan messages from Taiwan</p>
						</div>
					</div>
				</Link>
			</div>
		</main>
	);
};

export default Taiwan;
