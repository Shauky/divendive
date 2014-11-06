/** @jsx React.DOM */
'use strict';
// Boats is for presentation, No change.
var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
            return(
		 		     React.DOM.dd(null,
				   		React.DOM.dt(null, 
							"All Boats Data Title"),
	 				  			{boats: data}
	 				)
  			    )		
    	   }
	});

React.renderComponent(AllBoatClass(null), document.getElementById('boats')
	);