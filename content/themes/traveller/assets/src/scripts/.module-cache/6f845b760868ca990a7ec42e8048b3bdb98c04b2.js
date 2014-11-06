var requirejs = require(['./assets/src/scripts/require']);
// var React = require(['./node_modules/react/react']);

var config = {
    baseUrl: './assets/src/scripts/',
    name: 'trvrapp'
};

var BoatWrapper = require(["./assets/src/scripts/BoatWrapper.js"]);

function render() {
	return 
		BoatWrapper, document.getElementById('sml-schedule');
}