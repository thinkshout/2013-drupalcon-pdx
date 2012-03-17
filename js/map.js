var map;
var activeFeature = null;

// Features collection. The key needs to match the ID of the corresponding
// dom element
var features = {
  feature1: {
    lat: 45.5236111,
    lon: -122.675,
    zoom: 8
  },
  feature2: {
    lat: 45.5163715505381,
    lon: -122.629707282185,
    zoom: 15
  },
  feature3: {
    lat: 45.52268014994,
    lon: -122.673152182496,
    zoom: 13
  },
  feature4: {
    lat: 45.513464910352276,
    lon: -122.67119884490964,
    zoom: 14
  },
  feature5: {
    lat: 45.51182053454101,
    lon: -122.62604713439943,
    zoom: 14
  },
  feature6: {
    lat: 45.563102450326845,
    lon: -122.63527393341064,
    zoom: 13
  }
};

jQuery(document).ready(function() {
  var map = new L.Map('map', {
    attributionControl: false,
    scrollWheelZoom: false,
    zoomControl: false
  });

  // using MapQuest base layer
  var mapquest = new L.TileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    maxZoom: 18,
    subdomains: '1234'
  });

  /// center map and set view to middle of Portland
  var pdx = new L.LatLng(45.5236111, -122.675);
  map.setView(pdx, 9).addLayer(mapquest);

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
    var popup = jQuery(this).siblings('.popup').html();
    marker.bindPopup(popup, {
      closeButton: false
    }).openPopup();

    var mapsize = map.getSize();
    var markerpoint = map.project(latlon, feature['zoom']);
    // Shift the map center up 1/3 of the map container size less 20 pixels.
    var offset = new L.Point(0, mapsize.y / 3 - 20 );
    var centerpoint = markerpoint.subtract(offset);
    var centerlatlon = map.unproject(centerpoint, feature['zoom']);
    map.setView(centerlatlon, feature['zoom']);
    
    // set active feature
    activeFeature = id;
    return false;
  });

});
