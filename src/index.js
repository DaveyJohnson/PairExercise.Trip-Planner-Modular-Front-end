//console.log("Hello from JavaScript!");

import mapboxgl from "mapbox-gl";
import { buildMarker, buildMarkers } from "./marker";

mapboxgl.accessToken = "pk.eyJ1IjoiZGF2ZXlqb2huc29uNzEiLCJhIjoiY2ttY2xmNmI1MXFpcTJ3cDlrODgwb3N2ZyJ9.HMW9K5N9LZS70IORfNcfuQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago, [-96, 37.8] middle of USA
  zoom: 12, //3 // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("activity", [-74.009, 40.705], map);
buildMarkers( map);


