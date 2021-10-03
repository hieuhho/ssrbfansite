import React from "react";
import LazyLoad from "react-lazyload";

const imagesArr = [];
for (let i = 1; i <= 56; i += 1) {
	imagesArr.push(
		`https://fanletter.s3.us-west-1.amazonaws.com/${`00${i}`.slice(-3)}.png`
	);
}

const TaiwanMessages = () => {
	return (
		<main>
			<h1 className="title">Projects</h1>

			<div className="taiwan-messages-grid">
				{imagesArr.map((image, index) => (
					<LazyLoad height={400}>
						<img key={index} src={image} alt="fanletter"></img>
					</LazyLoad>
				))}
			</div>
		</main>
	);
};

export default TaiwanMessages;
