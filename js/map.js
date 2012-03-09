var map;

var features = {
  feature1: {
    lat: 45.53,
    lon: -122.55,
    popup: 'This is some cool stuff'
  },
  feature2: {
    lat: 45.49,
    lon: -122.7,
    popup: 'This is some MORE cool stuff'
  }
};

jQuery(document).ready(function() {
  var map = new L.Map('map', {
    attributionControl: false,
    scrollWheelZoom: false
  });

  var mapquest = new L.TileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: 'MapQuest',
    maxZoom: 18,
    subdomains: '1234'
  });

  var pdx = new L.LatLng(45.5236111, -122.675);
  map.setView(pdx, 13).addLayer(mapquest);


  for (var id in features) {
    var feature = features[id];
    var marker = new L.Marker(new L.LatLng(feature.lat, feature.lon));
    marker.bindPopup(feature.popup);
    marker._leaflet_id = id;
    map.addLayer(marker);
  }

  jQuery('#features a').click(function() {
    var id = jQuery(this).attr('id');
    var latlon = new L.LatLng(features[id].lat, features[id].lon)
    map.panTo(latlon);
    map._layers[id].openPopup();
    return false;
  });
});
