/*
* Travelmap - jQuery Plugin
* Add the countries and cities where have you been
*
* Examples and documentation at: http://troll.sytes.net/devel/travelmap
*
* Copyright (c) 2013 Tibor Cz
*
* Version: 1.8.7 (15/04/2013)
* Requires: jQuery v1.9+
*
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/

(function($) {

	$.fn.extend({

		travelmap: function(settings) {

			var o = {
				centerLng: 0,
				centerLat: 0,
				data: 'cities.json',
				mapWidth: 550,
				mapHeight: 500,
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
				streetViewControl: false
			};
			settings = $.extend(o, settings);

			/* map type options */
			var mapTypeId;
			if (o.mapTypeId === 'HYBRID') {
				mapTypeId = google.maps.MapTypeId.HYBRID;
			} else if (o.mapTypeId === 'SATELLITE') {
				mapType = google.maps.MapTypeId.SATELLITE;
			} else if (o.mapTypeId === 'TERRAIN') {
				mapTypeId = google.maps.MapTypeId.TERRAIN;
			} else {
				mapTypeId = google.maps.MapTypeId.ROADMAP;
			}

			/* map control options */
			var mapTypeControlOptions;
			if (o.mapTypeControlOptions === 'DROPDOWN_MENU') {
				mapTypeControlOptions = google.maps.MapTypeControlStyle.DROPDOWN_MENU;
			} else if (o.mapTypeControlOptions === 'HORIZONTAL_BAR') {
				mapTypeControlOptions = google.maps.MapTypeControlStyle.HORIZONTAL_BAR;
			} else {
				mapTypeControlOptions = google.maps.MapTypeControlStyle.DEFAULT;
			}

			/* map zoom options */
			var zoomControlOptions;
			if (o.zoomControlOptions === 'LARGE') {
				zoomControlOptions = google.maps.ZoomControlStyle.LARGE;
			} else if (o.zoomControlOptions === 'SMALL') {
				zoomControlOptions = google.maps.ZoomControlStyle.SMALL;
			} else {
				zoomControlOptions = google.maps.ZoomControlStyle.DEFAULT;
			}

			/* marker animation options */
			var markAnimation;
			if (o.markAnimation === 'DROP') {
				markAnimation = google.maps.Animation.DROP;
			} else if (o.markAnimation === 'BOUNCE') {
				markAnimation = google.maps.Animation.BOUNCE;
			}

			/* basic options */
			var mapCenter = new google.maps.LatLng(o.centerLng,o.centerLat);
			var mapObject = $(this).attr('id');
			var mapOptions = {
				zoom: o.zoom,
				center: mapCenter,
				mapTypeId: mapTypeId,
				mapTypeControl: o.mapTypeControl,
				mapTypeControlOptions: {
				    style: mapTypeControlOptions
			    },
				zoomControl: o.zoomControl,
				zoomControlOptions: {
					style: zoomControlOptions
			    },
				panControl: o.panControl,
				scaleControl: o.scaleControl,
				overviewMapControl: o.overviewMapControl,
				streetViewControl: o.streetViewControl
			};
			var map = new google.maps.Map(document.getElementById(mapObject), mapOptions);

			/* global variables */
			var locations = new Array();
			var markers = new Array();
			var boxes = new Array();
			
			/* parse data file */
			$.ajax({
				url: o.data,
				dataType: 'json',
				success: function(data) {
					for (var i in data.places.city) {

						locations[i] = new google.maps.LatLng(data.places.city[i].lng, data.places.city[i].lat);

						/* markers options */
						var shape = {
							coord: [10,0,11,1,12,2,12,3,12,4,12,5,12,6,12,7,12,8,11,9,10,10,10,11,9,12,9,13,8,14,8,15,7,15,7,14,6,13,6,12,5,11,5,10,4,9,3,8,3,7,3,6,3,5,3,4,3,3,3,2,4,1,5,0,10,0],
							type: 'poly'
						};
						var image = new google.maps.MarkerImage(
							o.markImage,
							new google.maps.Size(16,16),
							new google.maps.Point(0,0),
							new google.maps.Point(8,16));
						var shadow = new google.maps.MarkerImage(
							o.markShadow,
							new google.maps.Size(28,16),
							new google.maps.Point(0,0),
							new google.maps.Point(8,16)
						);

						/* infoboxes options */
						var content = '<div class="content_' + data.places.city[i].id + '"><div id="siteNotice"></div>' + 
							'<h2 id="firstHeading" class="firstHeading">' + data.places.city[i].name + ', ' + data.places.city[i].country + '</h2>' +
							'<div id="bodyContent"><p>' + data.places.city[i].info + '</p></div></div>';
						boxes[i] = new google.maps.InfoWindow({
							content: content
						});

						markers[i] = new google.maps.Marker({
							animation: markAnimation,
							title: data.places.city[i].name + ', ' + data.places.city[i].country,
							icon: image,
							shadow: shadow,
							shape: shape,
							map: map,
							position: locations[i]
						});

						markers[i]._index = i;
						google.maps.event.addListener(markers[i], 'click', function() {
							boxes[this._index].open(map, markers[this._index]);
						});
					}
				},
				error: function(data) {
					alert('Something went wrong!');
				},
				contentType: 'application/json'
			});

			$(this).css({
				width: o.mapWidth,
				height: o.mapHeight
			});
		}

	});
})(jQuery);