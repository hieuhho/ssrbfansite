import { MenuItems } from "../components/navbar/MenuItems";
import { Link } from "react-router-dom";
import title from "../images/projects.svg";

const Projects = () => {
	return (
		<main id="projects">
			<img className="welcome-header" src={title} alt="SHISHIRO BOTAN" />
			<h1 className="title">Projects</h1>
			<div className="projects-container">
				{MenuItems.map((item, index) => {
					return (
						<Link className="project" to={item.path}>
							<img src={item.img} alt="project_img" />
							<h2 className="project-heading">{item.title}</h2>
							<div className="project-body">
								<div className="project-desc">
									<p>{item.desc}</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</main>
	);
};

export default Projects;
