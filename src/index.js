console.log("Hello from JavaScript!");

import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken = "pk.eyJ1IjoiZC1zYW5heSIsImEiOiJja21hcnExZjkxdWkwMm5vZmMxMmYzeng4In0.yTQ1PnOA7ZZW-vNMciemeQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const mglMarker = buildMarker("activity", [-74.009151, 40.705086]);
console.log("MapBox Marker ==>", mglMarker)
mglMarker.addTo(map);
