import React from "react";
import { Link } from "react-router-dom";

const imagesArr = [];
for (let i = 1; i <= 56; i += 1) {
  imagesArr.push(`https://fanletter.s3.us-west-1.amazonaws.com/${(`00${i}`).slice(-3)}.png`);
}

const Taiwan = () => {
	return (
		<main id="taiwan_anniversary">
			<h1 className="subheading">
				Taiwanese Milestone Projects
			</h1>

{/* SHISHIRO BUSTAN */}
			<div className="projects-container">
				<Link className="project" to="/taiwan2">
					<img src="https://www.thefeatherstudio.com/assets/img/project-5thAnniversary/hololive5th.jpg" alt="project_img" />
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
			<div className="autoscroll-collage">
				<div>
					{
						imagesArr.map(
							(image, index) => <img key={index} src={image} alt="fanletter"></img>
						)
					}
				</div>
			</div>

		</main>
	);
};

export default Taiwan;
