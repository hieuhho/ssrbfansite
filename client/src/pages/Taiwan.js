import React from "react";
import { Link } from "react-router-dom";

const Taiwan = () => {
	return (
		<main id="taiwan_anniversary">
			<h1 className="title">Taiwanese Milestone Projects</h1>

			{/* SHISHIRO BUSTAN */}
			<div className="projects-container">
				<Link className="project" to="/bustan">
					{/* <img src="https://i.imgur.com/miowk7H.png" alt="project_img" /> */}
					{/* <img src="https://i.imgur.com/pBFz8P6.png" alt="project_img" /> */}
					<img src="https://i.imgur.com/zEdRbcw.png" alt="project_img" />
					<h2 className="project-heading">Shishiro Bus</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>Botan on a bus, Bustan</p>
						</div>
					</div>
				</Link>
			</div>

			{/* FAN LETTERS */}
			<div className="projects-container">
				<Link className="project" to="/fan_letters">
					<img src="https://i.imgur.com/57xwxXQ.png" alt="project_img" />
					<h2 className="project-heading">Fan Letters</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>Fan letters from SSRBs</p>
						</div>
					</div>
				</Link>
			</div>

			{/* SSRB SINGS */}
			<div className="projects-container">
				<Link className="project" to="/ssrb_sings">
					<img src="https://i.imgur.com/OFCyfeS.png" alt="project_img" />
					<h2 className="project-heading">SSRB Sings</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>We got together and sing 🎶</p>
						</div>
					</div>
				</Link>
			</div>

			{/* MINECRAFT TEXTURE PACK */}
			<div className="projects-container">
				<Link className="project" to="/texture_pack">
					<img
						src="https://www.thefeatherstudio.com/assets/img/project-5thAnniversary/hololive5th.jpg"
						alt="project_img"
					/>
					<h2 className="project-heading">Texture Pack</h2>
					<div className="project-body">
						<div className="project-desc">
							<p>NePoLaBo Minecraft texture pack</p>
						</div>
					</div>
				</Link>
			</div>
		</main>
	);
};

export default Taiwan;
