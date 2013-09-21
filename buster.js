var config = module.exports;

config["Travelmap"] = {
    environment: "browser",
    libraries: [
		"http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js",
		"https://maps.googleapis.com/maps/api/js?sensor=true"
    ]
    sources: [
        "jquery.travelmap.js"
    ],
    tests: [
        "test/*-test.js"
    ]
};