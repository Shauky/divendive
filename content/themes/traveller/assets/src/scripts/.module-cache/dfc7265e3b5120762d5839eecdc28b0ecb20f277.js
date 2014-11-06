/** @jsx React.DOM */
'use strict';

var AllBoatClass = require(['./assets/src/scripts/boats.js'])

var BoatWrapper =  React.createClass({displayName: 'BoatWrapper', 
	 render: function(){
	 	 return ( 
	 	      React.DOM.div({id:"all-boats"},
	 	      React.DOM.form({className: "boat-search"},
	 	      		React.DOM.div({className: "phones-list"},
	 	      			AllBoatClass(null)
	 	      	   )
	 	      	)
	 	      )
		    )
	 	}
	 });

React.renderComponent(BoatWrapper(null), document.getElementById('sml-schedule')
	);