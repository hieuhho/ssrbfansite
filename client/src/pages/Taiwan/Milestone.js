import React from "react";

const Milestone = () => {
	return (
		<main>
			<h1 className="title">Milestone Song PV</h1>
			<div className="video-container">
				<div className="video-wrapper">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/orDM2iGVZgI"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</main>
	);
};

export default Milestone;
