/** @jsx React.DOM */
'use strict';

var boats = data;

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
		boats.map(function(boat, i){
            return(
		 		     React.DOM.dd(null,
				   		React.DOM.dt(null, 
							"All Boats Data Title"),
	 				  			React.DOM.span(
	 			       )
	 				)
  			     )
               }
  			)		
    	}
	});

React.renderComponent(AllBoatClass(boat), document.getElementById('boats')
	);