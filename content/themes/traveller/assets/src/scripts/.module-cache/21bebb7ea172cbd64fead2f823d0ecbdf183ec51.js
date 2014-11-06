/** @jsx React.DOM */
'use strict';


var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
		 return(

		 		React.DOM.dl(null,
						React.DOM.dt(null, 
						"All Boats Data Title"),
						{data: data}

		 				)
 		
	  			)		
	    	}
	});

React.renderComponent(AllBoatClass(null), document.getElementById('boats')
	);