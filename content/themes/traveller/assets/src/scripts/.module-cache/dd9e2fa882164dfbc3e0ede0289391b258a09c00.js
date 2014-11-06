/** @jsx React.DOM */
'use strict';

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
		 return(
	
		 	React.DOM.ul(null, " \"Nothing here yet\" ")
	  			 	)		
	    	}
	});


React.renderComponent(AllBoatClass(null), document.getElementById('boat-list')
	);