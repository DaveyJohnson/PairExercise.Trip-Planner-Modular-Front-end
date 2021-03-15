import mapboxgl from "mapbox-gl";

function buildMarker(type, coords) {
  const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
  };

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = iconURLs[`${type}`];

  const mglMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coords);

  return mglMarker;
}

export default buildMarker;

