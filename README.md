# Travelmap

Add the countries and cities where have you been

#### How to use the plugin

Include the script, the Google API and jQuery framework then use the following options.
Add `&languege=YOUR_COUNTRY_ISO` parameter to maps API to load the map in your language.

`<script src="//maps.googleapis.com/maps/api/js?sensor=false&language=en"></script>`
`<script src=//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>`
`<script src="jquery.travelmap.js"></script>`

Select an element and set up the script but be careful it only usable with id-s because of how the Google API works.

`$('#map_canvas').travelmap();`

#### Highly customizable maps

[Google Maps API](https://developers.google.com/maps/documentation/javascript/)

```javascript
centerLng: 0
centerLat: 0
data: 'cities.json'
width: 550
height: 500
zoom: 1
markImage: 'image.png'
markShadow: 'shadow.png'
markAnimation: null
mapTypeId: 'ROADMAP'
mapTypeControl: false
mapTypeControlOptions: 'DEFAULT'
zoomControl: false
zoomControlOptions: 'DEFAULT'
panControl: false
scaleControl: false
overviewMapControl: false
streetViewControl: false
geoLocCheck: false
geoLocMessage: 'You are here',
theme: 'greyscale'
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
{"places": {"city": [{
"name":"London",
"lng":"51.500152",
"lat":"-0.126236",
"country":"United Kingdom"
"info":"London is the capital city of England"
}]}}
```
