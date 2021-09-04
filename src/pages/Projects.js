import { MenuItems } from "../components/navbar/MenuItems";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<main id="projects">
			<h1 className="title">Projects</h1>
			<div className="projects-container">
				{MenuItems.map((item, index) => {
					return (
						<div className="project">
							<Link to={item.path}>
								<img src={item.img} />
							</Link>
							<Link className="project-heading" to={item.path}>
								<h2>{item.title}</h2>
							</Link>
							<div className="project-body">
								<div className="project-desc">
									<p>{item.desc}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default Projects;
