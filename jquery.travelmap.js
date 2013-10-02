/*
 * Travelmap - jQuery Plugin
 * Add the countries and cities where have you been
 *
 * Examples and documentation at: https://github.com/microtroll/jquery-travel
 *
 * Copyright (c) 2013 microtroll
 *
 * Version: 1.9 (02/10/2013)
 * Requires: jQuery v2+
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

(function($) {

	$.fn.travelmap = function(settings) {

		var o = {
			centerLng: 0,
			centerLat: 0,
			data: 'cities.json',
			mapWidth: 550,
			mapHeight: 500,
			zoom: 1,
			markImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAAACXZwQWcAAAAQAAAAEABcxq3DAAABgklEQVQ4y42Sv0sCYRjHP+97GhFU1OCiQUQ0yhXOaVtzexTNWUFroP0BLrVH0CrObRU0Rl4NDiJy4NHQUCgh1yHv23BnnYcnPfDC8/Pzfl+eV2itGZoQAoALkwJQBvJB6QEoF+v6noiJKODCpDylKJkClqWftxVYGjzJebGuy7GAy3VRmFLcmQKUHr1Jil/IVliJjCgqDYfncnmy1Rey1RfmcnmUBtN/YWkEHAEUUoGzVqmRTKVJptKsVWoABLXCJAAzoczg22Xw7Y6txQFanvKd5ukOfadN32nTPN0BIKi1wgOJCODRVqwuaOg9PfC+twnAtIRZBbYADB4nKThpCLrzBqwYkJH+WTFg3oCGoAucxAKOLLqe5PgtiJX+W+cb4EmOi3Xdjf0Hw594bdLZFmQ+/JBFDbcaZ99iKdw/dgsAPTizFQy0f2zl58b1jlUAcGXS2YAMwDM4BxZLAP9SAPAFh64Hruf7cX2xCgBustQBdl9ZH+aiChJMsE85urLoMMAPnKWcG4TKFSgAAAAldEVYdGNyZWF0ZS1kYXRlADIwMTItMDUtMTVUMDk6MDE6MTIrMDA6MDDHBWYEAAAAFXRFWHRDcmVhdGlvbiBUaW1lADIvMTcvMDggnKpYAAAAJXRFWHRtb2RpZnktZGF0ZQAyMDEyLTA1LTE1VDA5OjAxOjEyKzAwOjAwmLQQMAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTM5jWRgMAAAGrelRYdFhNTDpjb20uYWRvYmUueG1wAAB42tVSTWvbQBC9+1cM22ul/ZBiRYukUGxMCLiU2NDS20q7UoSt3WW1QRv/+h7suI4JPQRy6DsO72PmMcVdsKLZKQ+16npdIgBA0MsS/bxZk7VdqKf+/uDU5vB92xx2TS7RXTUrAg+DHZQXEIa9HnkokZCmVlyPfFBeYASBh8H6XYm+SVMr+LX+AQvjFKQxjRqSpJDOY5axPJt/hY3w8CA0sAwYIRkwxinlKYUTUDUDgMLJlj8uV6dMJ9sSPXlvOcbTNMVTEhvXYZrnOSYMMxY52Ubji/YiRHr8cjR59VmqsXG99b3R4GTLRW2efYnQDC5wOk7Yc5AeYyFNreLGDDgIi2lM8NkZAIogLF84JbxxW2P21fH8Ve/UZNxuhMUmKfA16T29WgqvKkbIbURYRLMtYTyZ8/Tm94X+SLqSr43s25cLeRKxdEtzTghP2Ul+QXrtBV8V89HCZHPuyz67fWxch2WD1V4NSvsR05i+7Uw2vDVuEL7qB9EpbHVX4L/Df+53nD4uV9WswOe/rN6s9Vn470P+AMIj+zIH4sBMAAAAAElFTkSuQmCC',
			markShadow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQEAYAAABVX8OsAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAACc0lEQVRIx+2WO2hTYRiG/1yanrYxibaREluLlrZWUQriBXGRugkOXasg9bYUQYp4mUTqooKg4KCok4u6KCg4COJSOlQ3J6W1tMa0Nk2apKkJSTq8zxGMBJPSbPmWh5Pzn+9/3+/7LzGmFrWoRS2qGK51yuOADbATDvPaJzrvM60H3hDdbp63Me4UHCdPn1B4wfNHGIeFahXICVvgVQy9R/h50foi+reKwSVxy1GxPQHfiqFBsfmZ2DhFAT4xzxvoLypwSYGVhp0wCBHiWsBQjxh4Lrb2YaBb3P5S7Poq9pwTuzeKnTkKwPgA33sOMX2yaP6S4V6jwSZIx1x0oHGPuGmX2HwSgV18doYCsLQ8D6kzRvIYWbnN71ExeYTnOeY9Dq8XFfyfpVrpHrQ7voO8CLToRHBIbLslhh5gGGFelqZFgeqekics5g5g8K4YaxOjdC7VyzjmMfMwVUpwpR20C7IPv7MI3iwGpsQWKu6bwAh7y3EBgT/EzAcxjdDEtLjIHp6jI0uWmL0iFt6hg71d+pBZq8F2BEdI80Ss92JojOH7xfwIAjn90nQuwWER+4wxxsevicmQ+PsxeSiUeQWz5Qr+X9hLsx4e5mf2nkXH/MfEDRgyO4XUZTHKNRD5JobZm5E63t9jPAayFzE2QL6bsOzrodxT1N7ECDEZ8p8VcyzRFa6L+AzCGTdNpSdPiN8RGkbgInswfRBj/RjbzXx3YKxcY3ZU2kHbYCu+O3hNZx0ISF8SF16L83mMLIsprpMM10huFN0sVfMIzvxd0OqF3UH+gfw5Rffi+7TY9FP0Mb7hF+8pjJPDwnAPGr433qJCrlusAobpnIN3kn13AAAAAElFTkSuQmCC',
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
			geoLocMessage: "You are here"
		};
		settings = $.extend(o, settings);

		// map types
		var mapTypeId = google.maps.MapTypeId.ROADMAP;
		if (o.mapTypeId === 'HYBRID') {
			mapTypeId = google.maps.MapTypeId.HYBRID;
		} else if (o.mapTypeId === 'SATELLITE') {
			mapType = google.maps.MapTypeId.SATELLITE;
		} else if (o.mapTypeId === 'TERRAIN') {
			mapTypeId = google.maps.MapTypeId.TERRAIN;
		}

		// map controls
		var mapTypeControlOptions = google.maps.MapTypeControlStyle.DEFAULT;
		if (o.mapTypeControlOptions === 'DROPDOWN_MENU') {
			mapTypeControlOptions = google.maps.MapTypeControlStyle.DROPDOWN_MENU;
		} else if (o.mapTypeControlOptions === 'HORIZONTAL_BAR') {
			mapTypeControlOptions = google.maps.MapTypeControlStyle.HORIZONTAL_BAR;
		}

		// map zoom
		var zoomControlOptions = google.maps.ZoomControlStyle.DEFAULT;
		if (o.zoomControlOptions === 'LARGE') {
			zoomControlOptions = google.maps.ZoomControlStyle.LARGE;
		} else if (o.zoomControlOptions === 'SMALL') {
			zoomControlOptions = google.maps.ZoomControlStyle.SMALL;
		}

		// marker animation
		var markAnimation;
		if (o.markAnimation === 'DROP') {
			markAnimation = google.maps.Animation.DROP;
		} else if (o.markAnimation === 'BOUNCE') {
			markAnimation = google.maps.Animation.BOUNCE;
		}

		// set center to users location if enabled
		var pos = new google.maps.LatLng(o.centerLng, o.centerLat);
		if (navigator.geolocation && o.geoLocCheck === true) {
			navigator.geolocation.getCurrentPosition(function(position) {
				pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				var infowindow = new google.maps.InfoWindow({
					map: map,
					position: pos,
					content: o.geoLocMessage
				});
			});
		}

		// basic options
		var mapObject = $(this).attr('id'),
			mapOptions = {
				zoom: o.zoom,
				center: pos,
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
			},
			map = new google.maps.Map(document.getElementById(mapObject), mapOptions);

		// global variables
		var locations = [],
			markers = [],
			boxes = [];
		
		// data file parser
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
			error: function() {
				throw new Error('Error while loading JSON object!');
			}
		});

		$(this).css({
			width: o.mapWidth,
			height: o.mapHeight
		});

	}

})(jQuery);