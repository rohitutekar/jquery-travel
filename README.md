# jQuery Travelmap

:warning: This plugin is deprecated and no more maintained. Please use the new version of [https://github.com/microtroll/travelmap](Travelmap)

[![Build Status](https://travis-ci.org/microtroll/jquery-travel.svg)](https://travis-ci.org/microtroll/jquery-travel)

Pin your visited cities and countries on Google map with jQuery

#### How to use

Include the script, the Google API and jQuery then use the following options.
Add `&languege=YOUR_COUNTRY_ISO` parameter to maps API to load the map in your language.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="//maps.googleapis.com/maps/api/js?sensor=false&language=en"></script>
<script src="jquery.travelmap.js"></script>
```

Select an element and set up the script but be careful it only usable with id-s because of how the Google API works.

```javascript
$('#map_canvas').travelmap();
```

#### Highly customisable maps

[Google Maps API](https://developers.google.com/maps/documentation/javascript/)

```javascript
$('#map_canvas').travelmap({
  data: 'cities.json',
  center: [0, 0], // lat, lng
  width: 550,
  height: 500,
  zoom: 1,
  markImage: 'image.png',
  markShadow: 'shadow.png',
  markAnimation: null,
  mapTypeId: 'ROADMAP',
  mapTypeControl: false,
  mapTypeControlOptions: 'DEFAULT',
  zoomControl: false,
  zoomControlOptions: 'DEFAULT',
  panControl: false,
  scaleControl: false,
  overviewMapControl: false,
  streetViewControl: false,
  geoLocCheck: false,
  geoLocMessage: 'You are here',
  theme: 'greyscale'
});
```

#### Select a theme or specify your own

[Snazzy Maps](http://snazzymaps.com/)

```javascript
theme: 'neutral-blue'
theme: 'midnight-commander'
theme: 'gowalla'
theme: 'bright-and-bubbly'
theme: 'greyscale'
theme: 'red-alert'
```

#### The JSON object

```javascript
{
  "places": [
    {
      "name":"London",
      "lng":"51.500152",
      "lat":"-0.126236",
      "country":"United Kingdom",
      "info":"London is the capital city of England"
    }
 ]
}
```
