/** @jsx React.DOM */
'use strict';

var AllBoatClass = require(["./boats.js"])

var BoatWrapper =  React.createClass({displayName: 'BoatWrapper', 
	 render: function(){
	 	 return ( 
				<AllBoatClass />
		 	)
	 	}
	 });

React.renderComponent(BoatWrapper(null), document.getElementById('sml-schedule')
	);