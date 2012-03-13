var map;
var activeFeature = null;

// Features collection. The key needs to match the ID of the corresponding
// dom element
var features = {
  feature1: {
    lat: 45.5236111,
    lon: -122.675,
    zoom: 8,
    popup: '<div class="feature1"><img class="pdx-photo popup-image" src="img/drewish.jpg" /><div class="pdx-fact">It\'s illegal to pump your own gas in Oregon, as well as to used canned corn as fish bate, or box with a kangaroo. Also, it\'s illegal to possess an uncured animal hide in Portland city limits, or to whistle under water. You\'ve been warned.</div></div>'
  },
  feature2: {
    lat: 45.5163715505381,
    lon: -122.629707282185,
    zoom: 15,
    popup: '<div class="feature2"> <img class="pdx-photo popup-image" src="img/andrea.jpg" /><div class="pdx-fact">Portland was not, in fact, discovered by Lewis and Clarke. It was discovered by a lot of Californians who got tired of Bay Area traffic and high housing costs.</div></div>'
  },
  feature3: {
    lat: 45.52268014994,
    lon: -122.673152182496,
    zoom: 13,
    popup: '<div class="feature3"><img class="pdx-photo popup-image" src="../img/chris_amye.jpg" /><div class="pdx-fact">We eat a lot of Voodoo Donuts and drink a lot of Stumptown Coffee - but it doesn\'t show. Also, we can drink beer at our movie theaters.</div></div>'
  },
  feature4: {
    lat: 45.513464910352276,
    lon: -122.67119884490964,
    zoom: 14,
    popup: '<div class="feature4"><div class="pdx-photo"><iframe width="300" height="182" src="http://www.youtube.com/embed/V3nMnr8ZirI" frameborder="0" allowfullscreen></iframe></div><div class="pdx-fact">There\'s no sales tax in Oregon, which is good, because we aren\'t particularly good at math. We are good at riding bikes.</div></div>'
  },
  feature5: {
    lat: 45.51182053454101,
    lon: -122.62604713439943,
    zoom: 14,
    popup: '<div class="feature5"><img class="pdx-photo popup-image" src="img/beer.jpg" /><div class="pdx-fact">PDX is the 23rd largest city in the U.S, but we drink more locally brewed beer than any city in the world (trust us, we\'re drinking right now).</div></div>'
  },
  feature6: {
    lat: 45.563102450326845,
    lon: -122.63527393341064,
    zoom: 13,
    popup: '<div class="feature6"><img class="pdx-photo popup-image" src="img/hipster.jpg" /><div class="pdx-fact">Portland is not the capital of Oregon, but it is the capital of the Hipster phenomenon. (Not Brooklyn or Austin - just count our mustaches and tattoos.) Also, Oregon residents own 1/4th of the U.S.\' llama population.</div></div>'
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
    marker.bindPopup(feature.popup).openPopup();
    map.setView(latlon, feature['zoom']);

    // set active feature
    activeFeature = id;
    return false;
  });

  jQuery(window).resize(function() {
    setMapHeight();
  });
  setMapHeight();
});

function setMapHeight() {
  var winHeight = jQuery(window).height();
  var mainHeight = jQuery('.main').height();
  if (winHeight > mainHeight) {
    jQuery('#map').height(winHeight - mainHeight);
  }
}
