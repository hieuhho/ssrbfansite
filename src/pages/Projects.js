import React, { useState } from "react";
import { MenuItems } from "../components/navbar/MenuItems";
import { Link } from "react-router-dom";

const Projects = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<main>
			<h1 className="projects" onClick={handleClick}>
				{MenuItems.map((item, index) => {
					return (
						<Link
							className="project_col"
							to={item.path}
							onClick={() => setClick(false)}
							style={{
								backgroundImage: 'url("' + item.img + '")',
							}}
							data-text={item.desc}
						>
							<div className="project_title">{item.title}</div>
						</Link>
					);
				})}
			</h1>
		</main>
	);
};

export default Projects;
