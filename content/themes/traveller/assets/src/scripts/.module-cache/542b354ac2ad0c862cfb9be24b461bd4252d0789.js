/** @jsx React.DOM */
'use strict';

var AllBoatClass = require(['./assets/src/scripts/boats.js'])

var BoatWrapper =  React.createClass({displayName: 'BoatWrapper', 
	 render: function(){
	 	 return ( 
	 	 		AllBoatClass(null),
				React.DOM.span({id:"all-boats"})
		 	)
	 	}
	 });

React.renderComponent(BoatWrapper(null), document.getElementById('sml-schedule')
	);