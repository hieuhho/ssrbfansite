import { MenuItems } from "../components/navbar/MenuItems";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<main id="projects">
			{MenuItems.map((item, index) => {
				return (
					<Link to={item.path}>
						<div className="project">
							<img src={item.img} />
							<h2>{item.title}</h2>
							<div className="project-desc">
								<p>{item.desc}</p>
							</div>
						</div>
					</Link>
				);
			})}
		</main>
	);
};

export default Projects;
