import React, { useState, useEffect } from "react";
import { VectorMap } from "react-jvectormap";
import axios from "axios";
import Modal from "../components/modal/Modal";
import exampleTweet from "../images/exampleTweet.jpg";
import exampleTweetJP from "../images/exampleTweetJP.jpg";
const { overwrite, getName } = require("country-list");
overwrite([
	{
		code: "TW",
		name: "Taiwan",
	},
]);

// const mapData = {
// 	CN: 213451451,
// 	ID: 213451451,
// 	IN: 1311559204,
// 	US: 331883986,
// 	PK: 210797836,
// 	BR: 210301591,
// 	NG: 208679114,
// 	BD: 161062905,
// 	RU: 141944641,
// 	MX: 127318112,
// 	HK: 1389618778,
// 	TW: 1389618778,
// };

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
	const [mapData, setMapData] = useState({});
	const [messages, setMessages] = useState([]);
	const [sidebar, setSidebar] = useState(false);
	const [showExampleTweet, setshowExampleTweet] = useState(false);
	const [lang, setLang] = useState("en");

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
		document.querySelectorAll(".jvectormap-tip").forEach((el) => {
			el.removeAttribute("style");
			el.innerHTML = "";
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
		const url = "https://ssrb-query.herokuapp.com/fetch_tweets";
		axios
			.post(url, {
				country: countryCode,
			})
			.then((db_messages) => {
				let messages = db_messages.data;
				setMessages(messages);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		setTip(true);
		const getCountries = () => {
			const url = "https://ssrb-query.herokuapp.com/fetch_country";
			axios
				.get(url)
				.then((locations) => {
					let countries = locations.data;
					setMapData(countries);
				})
				.catch((err) => console.log(err));
		};
		getCountries();
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
							: "Click a country to see the number of SSRBmins"}
					</p>
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
									<img
										className="map-card-img"
										src={handleImg(message.image)}
										alt="ssrbmin_img"
									></img>
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
								{lang === "en" ? "日本語" : "EN"}
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
						<p id="hint-text">
							Disclaimer: Any negative, hurtful, NSFW, R18+ or controversial
							messages will be removed from the map
						</p>
					</>
				) : (
					<>
						<div className="help-modal-header">
							<h3>
								登録者数100万人の突破を祝うためのSSRB世界地図企画に参加してししろんに応援しましょう！
							</h3>
							{/* toggles language */}
							<button
								className="help-modal-header-toggle"
								onClick={() => setLang(lang === "en" ? "jp" : "en")}
							>
								{lang === "en" ? "日本語" : "EN"}
							</button>
						</div>
						<h4>参加案内：</h4>
						<ol>
							<li>本企画はツイッターで行います。</li>
							<li>
								カクカッコ[]の中に英語で自分の国の国名を書いて、その後に獅白ぼたんさんへのメッセージを書いてください。
								<p>
									例：
									<br />
									[Japan]
									<br />
									家でだらだらしてぼたんの配信を見るのが大好きだ！ #SSRBworld
								</p>
							</li>
							<li>
								自国にある場所の写真の中に自分のSSRBの画像を入れて、ツイートに追加してください。自分で描いたイラストも{" "}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://picrew.me/image_maker/1217551"
								>
									SSRBメーカー
								</a>{" "}
								も使えます。
							</li>
							<li>
								最後に、「#SSRBworld」のハッシュタグを付けてツイッターでつぶやいてください。
							</li>
						</ol>
						{/* example tweet dropdown */}
						<button
							className="help-modal-example-btn"
							onClick={() => setshowExampleTweet(!showExampleTweet)}
						>
							こちらにクリックするとツイートの例が表示されます
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
						<p>100万人登録者を突破するまでに投稿を受け付けています。</p>
						<p>本人が喜ぶような内容のメッセージを書いてください！</p>
						<p id="hint-text">
							注意：ネガティブなメッセージ、本人が傷つくようなメッセージ、センシティブな内容のメッセージ、論争を招くようなメッセージ、他にも害を及ぼしそうなメッセージは全部削除されます。
						</p>
					</>
				)}
			</Modal>
		</div>
	);
};
export default Birthday;
