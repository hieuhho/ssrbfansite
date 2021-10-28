import React from "react";
import LazyLoad from "react-lazyload";

const imagesArr = [];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
for (let i = 1; i <= 55; i += 1) {
	imagesArr.push(
		`https://fanletter.s3.us-west-1.amazonaws.com/webp/${`00${i}`.slice(
			-3
		)}.webp`
	);
}

for (let i = 1; i <= 13; i += 1) {
	imagesArr.push(
		`https://fanletter.s3.us-west-1.amazonaws.com/messages/${`00${i}`.slice(
			-3
		)}.webp`
	);
}
shuffle(imagesArr)
imagesArr.unshift("https://fanletter.s3.us-west-1.amazonaws.com/credits/000.webp")

let bookCredits = ["https://fanletter.s3.us-west-1.amazonaws.com/credits/071.webp", "https://fanletter.s3.us-west-1.amazonaws.com/credits/072.webp", "https://fanletter.s3.us-west-1.amazonaws.com/credits/073.webp"]

const FanMessages = () => {
	return (
		<main>
			<h1 className="title">Fan Arts & Messages</h1>

			<div className="taiwan-messages-grid">
				{imagesArr.map((image, index) => (
					<LazyLoad height={400} once>
						<img key={index} src={image} alt="fanletter"></img>
					</LazyLoad>
				))}
			</div>
			<h1 className="title">Credits</h1>
			<div className="taiwan-messages-grid">
				{bookCredits.map((image, index) => (
					<LazyLoad height={400} once>
						<img key={index} src={image} alt="fanletter"></img>
					</LazyLoad>
				))}
			</div>
		</main>
	);
};

export default FanMessages;
