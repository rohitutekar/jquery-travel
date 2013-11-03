var config = module.exports;

config["Travelmap"] = {
    environment: "browser",
    sources: [
        "lib/jquery.min.js",
        "https://maps.googleapis.com/maps/api/js?sensor=true",
        "jquery.travelmap.js"
    ],
    tests: [
        "test/*-test.js"
    ]
};