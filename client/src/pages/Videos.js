import React from "react";
import ReactPlayer from "react-player";

const Videos = () => {
	return (
		<main>
			<h1 className="subheading">Videos</h1>
			<div className="video-container">
				<div className="video-wrapper">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/videoseries?list=PLHLU3OPWJVbG3tDTLznOZ1Iv9t-Pju5V4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</main>
	);
};

export default Videos;
