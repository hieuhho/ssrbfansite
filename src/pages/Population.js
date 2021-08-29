import React, {useState} from 'react';
import { WorldMap } from "react-svg-worldmap"

const data =
[
  { country: "id", value: 213451451 }, // china
  { country: "in", value: 1311559204 }, // india
  { country: "us", value: 331883986 },  // united states
  { country: "id", value: 264935824 },  // indonesia
  { country: "pk", value: 210797836 },  // pakistan
  { country: "br", value: 210301591 },  // brazil
  { country: "ng", value: 208679114 },  // nigeria
  { country: "bd", value: 161062905 },  // bangladesh
  { country: "ru", value: 141944641 },  // russia
  { country: "mx", value: 127318112 },   // mexico
  { country: "hk", value: 1389618778 },   // hong kong
  { country: "tw", value: 1389618778 }   // taiwan
]

const formattedNumber = (num: number, digits: number) => {
  const si = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: ' thousand '},
    {value: 1e6, symbol: ' million '},
    {value: 1e9, symbol: ' billion '},
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  for (let i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      return (
        (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
      );
    }
  }
};

const stylingFunction = (context : any) => {
  const opacityLevel = 0.2 + (1.5 * (context.countryValue - context.minValue) / (context.maxValue - context.minValue))
  return {
      fill: context.color,
      fillOpacity: opacityLevel,
      stroke: "black",
      strokeWidth: 1,
      strokeOpacity: 0.5,
      cursor: "pointer"
  }
}

function Population() {
  const [state, setState] = useState({
    cName: 'Select Country',
    iso: '',
    val: '',
    pre: '',
    suff: '',
  });

  const clickAction = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    countryName: string,
    isoCode: string,
    value: string,
  ) => {
    const numberValue = parseInt(value, 10);
    const fNumber = formattedNumber(numberValue, 2);
    setState({
      cName: countryName,
      iso: isoCode,
      val: fNumber,
      pre: '',
      suff: '',
    });
  };
  return (
    <div className="map" >
       <WorldMap color="red" value-suffix="ssrb" size="responsive" strokeOpacity="0.2" backgroundColor="transparent" frame="true" frameColor="transparent" styleFunction={stylingFunction} onClickFunction={clickAction} data={data} />
        <ul className="country_wrapper">
          <li className="country_data">Country: {state.cName}</li>
          <li className="country_data">Fans: {state.val}</li>
        </ul>
    </div>
  )
}

export default Population
