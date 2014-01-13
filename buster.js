var config = module.exports;

config["Travelmap"] = {
	extensions: [
		require("buster-html-doc")
	],
	environment: "browser",
	rootPath: "./",
	libs: [
		"lib/jquery.min.js",
		"lib/gmaps.js"
	],
	sources: [
		"jquery.travelmap.js"
	],
	tests: [
		"test/*-test.js"
	]
};