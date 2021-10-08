import React from "react";
import { SocialIcon } from 'react-social-icons';

const About = () => {
	return (
		<main id="credits">
			<h1 className="title">About</h1>
			<div className="credits">
				<h2 className="subheading">Social Media</h2>
				<div className="credits-body">
					<section>
						<h4>Shishiro Botan:</h4>
						<ul>
							<SocialIcon url="https://www.youtube.com/channel/UCUKD-uaobj9jiqB-VXt71mA" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10, padding: 0 }}/>
							<SocialIcon url="https://twitter.com/shishirobotan" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}/>
							<SocialIcon url="https://www.reddit.com/user/shishirobotaaaaan/" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}/>
						</ul>
					</section>
					<section>
						<h4>Fan Discord:</h4>
						<ul>
							<SocialIcon url="https://www.youtube.com/channel/UCyH6LOLikq6rLGKv5yjgLXQ" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}/>
							<SocialIcon url="https://twitter.com/ssrb_den" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}/>
							<SocialIcon url="https://discord.gg/ssrb" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}/>
						</ul>
					</section>
				</div>
			</div>
			<br/>
			<div className="credits">
				<h2 className="subheading">Credits</h2>
				<div className="credits-body">
					<section>
						<h4>Website:</h4>
						<ul>
							<li>Definitely not Loli Potato</li>
							<li>Snow Snow Snow</li>
							<li>Matthew Tao</li>
						</ul>
					</section>
				</div>
				<p className="credits-footer">
					Note: This is strictly a fan site, we are not related to Cover Corp
					nor Hololive in any way.
				</p>
			</div>
		</main>
	);
};

export default About;
