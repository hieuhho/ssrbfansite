import React, { useState, useEffect, lazy, Suspense } from "react";
import iso_countries from "i18n-iso-countries";
import Modal from "../../components/modal/Modal";
import exampleTweet from "../../images/exampleTweet.jpg";
import exampleTweetJP from "../../images/exampleTweetJP.jpg";
import tweetsData from "./ssrbworld_tweets_db.json"

const { overwrite, getName, getCode } = require("country-list");

const VectorMap = lazy(() => import("../../components/map/VectorMap.js"));
const mapLoading = () => (
	<div className="center">
		<h2 className="subtitle">Loading...</h2>
	</div>
);

overwrite([
	{
		code: "TW",
		name: "Taiwan",
	},
	{
		code: "RU",
		name: "Russia",
	},
	{
		code: "BO",
		name: "Bolivia",
	},
	{
		code: "KR",
		name: "South Korea",
	},
	{
		code: "KP",
		name: "North Korea",
	},
]);

const tweetsNumberByCountry = {
	"FI": 2,
	"CZ": 1,
	"PE": 1,
	"PR": 1,
	"HK": 3,
	"ID": 10,
	"KH": 1,
	"PT": 1,
	"PL": 1,
	"BO": 1,
	"AM": 1,
	"KR": 1,
	"CL": 8,
	"AT": 3,
	"BN": 1,
	"LV": 1,
	"VN": 7,
	"AR": 1,
	"SV": 1,
	"NZ": 1,
	"GB": 4,
	"UA": 4,
	"RU": 39,
	"NO": 2,
	"MX": 5,
	"ZA": 2,
	"CO": 7,
	"DE": 3,
	"JP": 27,
	"RO": 1,
	"AU": 6,
	"FR": 3,
	"HU": 2,
	"US": 19,
	"TW": 16,
	"IN": 2,
	"BR": 6,
	"PH": 13,
	"ES": 1,
	"MM": 1,
	"TH": 1,
	"MY": 9,
	"NL": 1,
	"CA": 1,
	"IT": 1,
	"KZ": 2,
	"SG": 2
}

const formattedNumber = (num, digits) => {
	if (num <= 999) {
		return num;
	}
	const si = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: " thousand " },
		{ value: 1e6, symbol: " million " },
		{ value: 1e9, symbol: " billion " },
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	for (let i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
			return (
				(num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol
			);
		}
	}
};

const Birthday = () => {
	const [country, setCountry] = useState({
		cName: "Select Country",
		fans: "",
	});
	const [tip, setTip] = useState(false);
	const [messages, setMessages] = useState([]);
	const [sidebar, setSidebar] = useState(false);
	const [showExampleTweet, setshowExampleTweet] = useState(false);
	const [lang, setLang] = useState("en");
	const [search, setSearch] = useState("");
	const [instructions, setInstructions] = useState(
		"Click a country to see the number of SSRBmins"
	);

	const mapData = tweetsNumberByCountry

	const handleHover = (e, el, countryCode) => {
		const fans = mapData[countryCode] ? mapData[countryCode] : 0;
		if (fans !== 0) {
			el.html(el.html() + " (" + fans + " SSRBmins)");
		}
	};

	const handleClick = (e, countryCode) => {
		const cName = getName(countryCode);
		const fanNums = parseInt(
			mapData[countryCode] ? mapData[countryCode] : 0,
			10
		);
		const formattedFans = formattedNumber(fanNums, 2);
		if (fanNums !== 0) {
			setCountry({
				cName: cName,
				fans: formattedFans,
			});
		}
		getTweets(countryCode);
		let tips = document.querySelectorAll(".jvectormap-tip");
		tips.forEach((tip) => {
			tip.remove();
		});
		setSidebar(true);
	};

	const handleImg = (url) => {
		if (url.includes("drive.google")) {
			let imgID = url.split("=")[1];
			let sharableID = `https://drive.google.com/uc?export=view&id=${imgID}`;
			return sharableID;
		}
		return url;
	};

	const getTweets = (countryCode) => {
		let numbericLocation = parseInt(iso_countries.alpha2ToNumeric(countryCode))
		var result = tweetsData.filter(obj => {
			return obj.location === numbericLocation
		})
		setMessages(result);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const countryCode = getCode(search);
		const fanNums = parseInt(
			mapData[countryCode] ? mapData[countryCode] : 0,
			10
		);
		const formattedFans = formattedNumber(fanNums, 2);
		if (fanNums !== 0) {
			getTweets(countryCode);
			let cName = search
				.toLowerCase()
				.split(" ")
				.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
				.join(" ");
			setCountry({
				cName: cName,
				fans: formattedFans,
			});
		} else if (countryCode == null) {
			setCountry({
				cName: "Select Country",
				fans: "",
			});
			setInstructions(`Cannot find ${search}. Try again`);
		} else {
			setCountry({
				cName: "Select Country",
				fans: "",
			});
			setInstructions("No SSRBmins :(");
		}
	};

	useEffect(() => {
		setTip(true);
		return () => {
			let tips = document.querySelectorAll(".jvectormap-tip");
			tips.forEach((tip) => {
				tip.remove();
			});
		};
	}, []);

	return (
		<div id="map">
			<aside className={sidebar ? "map-sidebar open" : "map-sidebar"}>
				<div className="map-sidebar-header">
					<div className="map-sidebar-header-title">
						<h3>SSRB World Map</h3>
						<button className="map-help-btn" onClick={() => setTip(true)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#FFFFFF"
							>
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
							</svg>
						</button>
					</div>
					<p className="map-hint">
						{country.fans
							? `${country.fans} SSRBmins from ${country.cName}`
							: `${instructions}`}
					</p>
					<form
						autoComplete="off"
						onSubmit={handleSubmit}
						className="search-bar"
					>
						<label>
							<input
								placeholder="Search..."
								type="text"
								className="search-input"
								name="country"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</label>

						<button
							type="button"
							className="search-submit"
							onClick={(e) => handleSubmit(e)}
						>
							Search
						</button>
					</form>
				</div>

				<svg
					data-name="slantBottom"
					className="slant small"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1 1"
					preserveAspectRatio="none"
				>
					<path fill="#303030" d="M0 0h1v1L0 0z" />
				</svg>
				<div className="map-sidebar-content">
					<h4 className="map-location">{country.cName}</h4>

					{messages
						? messages.map((message) => (
								<div key={message.username} className="map-card">
									{message.image ? (
										<img
											className="map-card-img"
											src={handleImg(message.image)}
											alt="ssrbmin_img"
										></img>
									) : null}
									<div className="map-card-body">
										<h5>{message.username}</h5>
										<p>{message.tweet}</p>
									</div>
								</div>
						  ))
						: null}
				</div>
			</aside>
			<button
				className="map-sidebar-toggle"
				onClick={() => setSidebar(!sidebar)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#FFFFFF"
					className={
						sidebar ? "map-sidebar-toggle__open" : "map-sidebar-toggle__close"
					}
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
				</svg>
			</button>

			<Suspense fallback={mapLoading()}>
				<VectorMap
					map={"world_mill"}
					backgroundColor="#355e86"
					onRegionTipShow={handleHover}
					onRegionClick={handleClick}
					containerClassName="world-map"
					regionStyle={{
						initial: {
							fill: "#e4e4e4",
							"fill-opacity": 0.9,
							stroke: "none",
							"stroke-width": 0,
							"stroke-opacity": 0,
						},
						hover: {
							"fill-opacity": 0.8,
							cursor: "pointer",
						},
					}}
					regionsSelectable={false}
					series={{
						regions: [
							{
								values: mapData,
								scale: ["#dfc59f", "#ffc400"],
								normalizeFunction: "polynomial",
							},
						],
					}}
				/>
			</Suspense>
			{/* Help modal */}
			<Modal onClose={() => setTip(false)} show={tip}>
				{lang === "en" ? (
					<>
						<div className="help-modal-header">
							<h3>Instructions:</h3>
							{/* toggles language */}
							<button
								className="help-modal-header-toggle"
								onClick={() => setLang(lang === "en" ? "jp" : "en")}
							>
								{lang === "en" ? "?????????" : "EN"}
							</button>
						</div>
						<ol>
							<li>Use the #SSRBworld hashtag on Twitter.</li>
							<li>
								Write the name of your selected country in English (using
								English alphabet) between square brackets, followed by a message
								you want to share to Shishiro.
								<p>
									Example:
									<br />
									[Japan]
									<br />I love chilling at home watching Botan Streams!
									#SSRBworld
								</p>
							</li>
							<li>
								Share a picture of your SSRB with a background of a location of
								the country you wrote in the tweet. You can use the{" "}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://picrew.me/image_maker/1217551"
								>
									SSRB Maker
								</a>{" "}
								or your own drawing.
							</li>
						</ol>
						{/* example tweet dropdown */}
						<button
							className="help-modal-example-btn"
							onClick={() => setshowExampleTweet(!showExampleTweet)}
						>
							Click to show example tweet
							<svg
								className="help-modal-example-icon"
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#FFFFFF"
							>
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M7 10l5 5 5-5z" />
							</svg>
						</button>
						<img
							className={
								showExampleTweet
									? "help-example-tweet"
									: "help-example-tweet hidden"
							}
							src={exampleTweet}
							alt="example tweet"
						/>
						<p>Submissions close when she reaches 1M subs.</p>
						<p>Remember to write a nice or happy message!</p>
						<p>Tweets may take up to 30 minutes to register in the map.</p>
						<p id="hint-text">
							Disclaimer: Any negative, hurtful, NSFW, R18+ or controversial
							messages will be removed from the map
						</p>
					</>
				) : (
					<>
						<div className="help-modal-header">
							<h3>
								????????????100?????????????????????????????????SSRB????????????????????????????????????????????????????????????????????????
							</h3>
							{/* toggles language */}
							<button
								className="help-modal-header-toggle"
								onClick={() => setLang(lang === "en" ? "jp" : "en")}
							>
								{lang === "en" ? "?????????" : "EN"}
							</button>
						</div>
						<h4>???????????????</h4>
						<ol>
							<li>?????????????????????????????????????????????</li>
							<li>
								???????????????[]???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
								<p>
									??????
									<br />
									[Japan]
									<br />
									???????????????????????????????????????????????????????????????????????? #SSRBworld
								</p>
							</li>
							<li>
								????????????????????????????????????????????????SSRB???????????????????????????????????????????????????????????????????????????????????????????????????{" "}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://picrew.me/image_maker/1217551"
								>
									SSRB????????????
								</a>{" "}
								??????????????????
							</li>
							<li>
								???????????????#SSRBworld????????????????????????????????????????????????????????????????????????????????????
							</li>
						</ol>
						{/* example tweet dropdown */}
						<button
							className="help-modal-example-btn"
							onClick={() => setshowExampleTweet(!showExampleTweet)}
						>
							????????????????????????????????????????????????????????????????????????
							<svg
								className="help-modal-example-icon"
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#FFFFFF"
							>
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M7 10l5 5 5-5z" />
							</svg>
						</button>
						<img
							className={
								showExampleTweet
									? "help-example-tweet"
									: "help-example-tweet hidden"
							}
							src={exampleTweetJP}
							alt="example tweet"
						/>
						<p>100???????????????????????????????????????????????????????????????????????????</p>
						<p>???????????????????????????????????????????????????????????????????????????</p>
						<p>
							????????????????????????????????????????????????30??????????????????????????????????????????
						</p>
						<p id="hint-text">
							??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
						</p>
					</>
				)}
			</Modal>
		</div>
	);
};
export default Birthday;
