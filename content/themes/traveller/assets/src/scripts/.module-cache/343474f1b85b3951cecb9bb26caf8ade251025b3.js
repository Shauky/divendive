/** @jsx React.DOM */
'use strict';


var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	//the data is handled and presented here. This is where everything happens
	 render: function(){
		 return(

		 		React.DOM.dd(null,
						React.DOM.dt(null, 
						"All Boats Data Title")

		 				)
 		
	  			)		
	    	}
	});

React.renderComponent(AllBoatClass({boats}), document.getElementById('boats')
	);