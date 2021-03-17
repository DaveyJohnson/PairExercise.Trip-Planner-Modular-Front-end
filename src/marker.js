import mapboxgl from "mapbox-gl";
import geojson from "./geojson";

function buildMarkers(map) {
  const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
  };

  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    //el.style.backgroundImage = `url('${iconURLs[`${type}`]}')`;

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });
}

function buildMarker(type, coordinates, map) {
  const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
  };

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = `url('${iconURLs[`${type}`]}')`;

  // const lnglatObj = new mapboxgl.LngLat(coordinates[0], coordinates[1]);

  // make a marker and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(coordinates)
    .addTo(map);
}

export { buildMarker, buildMarkers }

