/** @jsx React.DOM */
'use strict';

var tourCatWrapper = require(['./assets/src/scripts/tourcat.js'])

var BoatWrapper =  React.createClass({displayName: 'BoatWrapper', 
	 render: function(){
	 	 return ( 
	 	      React.DOM.div({className:"all-boats"},
	 	      React.DOM.form({className: "boat-search"},
	 	      		React.DOM.section({id: "boat-list"},
	 	      			tourCatWrapper(null)
	 	      	   )
	 	      	)
	 	      )
		    )
	 	}
	 });

React.renderComponent(BoatWrapper(null), document.getElementById('sml-schedule')
	);