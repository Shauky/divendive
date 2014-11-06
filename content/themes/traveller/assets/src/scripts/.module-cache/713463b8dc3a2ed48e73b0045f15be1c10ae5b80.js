/** @jsx React.DOM */
'use strict';

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
		 return(
	
		 	React.DOM.p(null, " \"Nothing here yet\" ")
	  			 	)		
	    	}
	});


React.renderComponent(AllBoatClass(null), document.getElementById('all-boats')
	);