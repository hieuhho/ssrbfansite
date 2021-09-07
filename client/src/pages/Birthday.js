import React, { useState, useEffect } from "react";
import { VectorMap } from "react-jvectormap";
import $ from 'jquery';
import Modal from "../Modal";
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
		return num
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
	// const [show, setShow] = useState(false);
	const [tip, setTip] = useState(false);
	const [mapData, setMapData] = useState({});
	// const [tweets, setTweets] = useState({
	// 	username: "",
	// 	tweet: "",
	// 	image: "",
	// 	location: ""
	// });
	const [messages, setMessages] = useState([]);

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
		getTweets(countryCode)
		document.querySelectorAll(".jvectormap-tip").forEach((el) => {
			el.removeAttribute('style')
			el.innerHTML = ""
		});
	};

	const getTweets = (countryCode) => {
		$.post({
			url: '/fetch_tweets',
			data: {country: countryCode},
			error: ((err) => console.error('AJAX GET FAILED', err)),
			success: ((messages) => {
				setMessages(messages);
			}),
		});
	}

	useEffect(() => {
		const getCountries = () => {
			$.get({
				url: '/fetch_country',
				error: ((err) => console.error('AJAX GET FAILED', err)),
				success: ((countries) => {
					setMapData(countries);
				}),
			});
		};
		getCountries()
	}, []);

	return (
		<div id="map">
			<aside className="map-sidebar">
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
						{country.fans ? `${country.fans} SSRBmins from ${country.cName}` : "Click a country to see the number of SSRBmins"
						}
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

					{messages ?
						messages.map((message) => (
						<div className="map-card">
							<img className="map-card-img" src={message.image} alt="ssrbmin_img"></img>
							<div className="map-card-body">
								<h5>{message.username}</h5>
								<p>{message.message}</p>
							</div>
						</div>
      			)) : null}
				</div>
			</aside>

			<VectorMap
				map={"world_mill"}
				backgroundColor="#0077be"
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
							scale: ["#ffeda0", "#f03b20"],
							normalizeFunction: "polynomial",
						},
					],
				}}
			/>
			<Modal title="Instructions" onClose={() => setTip(false)} show={tip}>
				<p>Tweet this #SSRBWOrld</p>
			</Modal>
			{/* <Modal
				title={`${country.fans} SSRBmins from ${country.cName}`}
				onClose={() => setShow(false)}
				show={show}
			></Modal> */}
		</div>
	);
};
export default Birthday;
