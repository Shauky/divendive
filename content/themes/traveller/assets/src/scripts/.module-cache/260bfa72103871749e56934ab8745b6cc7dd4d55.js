/** @jsx React.DOM */
'use strict';


var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
		 return(

		 		React.DOM.li(null,
		 				data()
	 				)
 		
	  			)		
	    	}
	});

React.renderComponent(AllBoatClass(null), document.getElementById('boats')
	);