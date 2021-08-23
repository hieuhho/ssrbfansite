import React, { useState } from "react";
import { MenuItems } from "../components/navbar/MenuItems";
import { Link } from "react-router-dom";

const Projects = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <h1 className="projects" onClick={handleClick}>
        {MenuItems.map((item, index) => {
          return (
              <Link
                className="col"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
          );
        })}
      </h1>
    </div>
  );
};

export default Projects;
