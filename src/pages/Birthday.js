import React, { useState } from "react";
import { VectorMap } from "react-jvectormap";

import Modal from "../Modal";
const { overwrite, getName } = require("country-list");
overwrite([
	{
		code: "TW",
		name: "Taiwan",
	},
]);

const mapData = {
	CN: 213451451,
	ID: 213451451,
	IN: 1311559204,
	US: 331883986,
	PK: 210797836,
	BR: 210301591,
	NG: 208679114,
	BD: 161062905,
	RU: 141944641,
	MX: 127318112,
	HK: 1389618778,
	TW: 1389618778,
};

const formattedNumber = (num, digits) => {
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
	const [show, setShow] = useState(false);
	const [tip, setTip] = useState(false);

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
			setShow(true);
			setCountry({
				cName: cName,
				fans: formattedFans,
			});
		}
		document.querySelectorAll(".jvectormap-tip").forEach((el) => el.remove());
	};

	return (
		<div id="map">
			{/* <button onClick={() => setTip("true")}>Tweet your SSRB</button>
			<Modal title="Instructions" onClose={() => setTip(false)} show={tip}>
				<p>Tweet this #SSRBWOrld</p>
			</Modal> */}
			<Modal
				title={`${country.fans} SSRBmins from ${country.cName}`}
				onClose={() => setShow(false)}
				show={show}
			></Modal>
			<div>
				<p>Click a country to see the number of SSRBmins</p>
			</div>
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
		</div>
	);
};
export default Birthday;
