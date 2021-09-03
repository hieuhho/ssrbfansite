import React from "react";
import ReactPlayer from 'react-player'


const Videos = () => {
	return (
		<main>
			<h1 className="videos">Videos</h1>
			<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/playlist?list=PLHLU3OPWJVbG3tDTLznOZ1Iv9t-Pju5V4'
          width='100%'
          height='100%'
					controls='true'
					volume='0.3'
        />
      </div>
		</main>
	);
};

export default Videos;
