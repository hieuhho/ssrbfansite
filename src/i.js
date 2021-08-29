import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';
import dataPopulation from './data/population';

new svgMap({
  targetElementID: 'svgMapPopulation',
  data: dataPopulation,
  flagType: 'emoji',
  mouseWheelZoomEnabled: true,
  mouseWheelZoomWithKey: true
});

