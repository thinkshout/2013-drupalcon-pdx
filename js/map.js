var map;
var activeFeature = null;

// Features collection. The key needs to match the ID of the corresponding
// dom element
var features = {
  feature1: {
    lat: 45.53,
    lon: -122.55,
    zoom: 10,
    popup: 'This is some cool stuff'
  },
  feature2: {
    lat: 45.49,
    lon: -122.7,
    zoom: 13,
    popup: 'This is some MORE cool stuff'
  }
};

jQuery(document).ready(function() {
  var map = new L.Map('map', {
    attributionControl: false,
    scrollWheelZoom: false
  });

  // using MapQuest base layer
  var mapquest = new L.TileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    maxZoom: 18,
    subdomains: '1234'
  });

  /// center map and set view to middle of Portland
  var pdx = new L.LatLng(45.5236111, -122.675);
  map.setView(pdx, 13).addLayer(mapquest);

  // click handler for dom elements
  jQuery('#features a').click(function() {
    var id = jQuery(this).attr('id');

    // clicking the same element twice
    if (id == activeFeature) {
      return false;
    }

    // clear active feature
    for(var layer_id in map._layers) {
      var layer = map._layers[layer_id];
      if (layer._leaflet_id == activeFeature) {
        map.removeLayer(layer);
      }
    }

    // create marker, bind popup, and set mapview
    var feature = features[id];
    var latlon = new L.LatLng(feature.lat, feature.lon);
    var marker = new L.Marker(latlon);
    marker._leaflet_id = id;
    map.addLayer(marker);
    marker.bindPopup(feature.popup).openPopup();
    map.setView(latlon, feature['zoom']);

    // set active feature
    activeFeature = id;
    return false;
  });
});
