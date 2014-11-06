require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/content/themes/traveller/assets/src/scripts/trvrapp.js":[function(require,module,exports){
define(function (require) {

    require("./BoatWrapper.js");

    require(["helper/util"], function (util) {

    });

});

},{"./BoatWrapper.js":1}],1:[function(require,module,exports){
/** @jsx React.DOM */
'use strict';

var BoatsClass =  React.createClass({ 
	 render: function(){
	 	return(
	 		'<h1> hello </h1>'
	 		)

	 }
});

React.renderComponent(BoatsClass, document.getElementById('sml-schedule'));




// var Hello = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			people: []
// 		};
// 	},
// 	componentDidMount: function(){
// 		$.getJSON('http://www.json-generator.com/api/json/get/bRrfOnjZSG?indent=2', (function(data){
// 			this.setState({people:data});
// 		}).bind(this));
// 	},
//   render: function(){
//     return (React.DOM.div(people={this.state.people})   <===========================
//   	)
//   }
// });

// React.renderComponent(Hello(null),
// 	document.getElementById('sml-schedule')
// 	);
},{}]},{},[]);
