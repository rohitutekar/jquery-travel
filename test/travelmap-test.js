var assert = buster.assert;

buster.testCase("Travelmap", {
    setUp: function () {
    	/*:DOC map = <div id="map"></div> */
        
        this.canvas = $(this.map).travelmap({
			markAnimation: 'DROP',
			mapTypeControl: true,
			mapTypeControlOptions: 'DROPDOWN_MENU',
			zoomControl: true,
			zoomControlOptions: 'SMALL',
			streetViewControl: true,
			height: 250,
			width: 400,
			zoom: 7,
			geoLocCheck: true
		});
    },

    "test fn is defined": function () {
        assert.defined($.travelmap());
    }

});
