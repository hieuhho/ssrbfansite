import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<main>
			<h1 className="milestone">Page Not Found</h1>
			<br />
			<div id="button_wrapper">
  			<button className="button_404" type="button">
					<Link to="/">Go Home</Link>
				</button>
			</div>
			<p style={{textAlign:"center"}}>
			<img className="cones_404" src="https://i.imgur.com/qIufhof.png" alt="404_cones"/>
      </p>
		</main>
	);
};

export default PageNotFound;
