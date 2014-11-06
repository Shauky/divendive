/** @jsx React.DOM */
'use strict';

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
            return(
		 		     React.DOM.dd(null,
				   		React.DOM.dt(null, 
							"All Boats Data Title"),
	 				  			React.DOM.span({boats: data})
	 				)
  			    )		
    	   }
	});

React.renderComponent(AllBoatClass(null), document.getElementById('boats')
	);