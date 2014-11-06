/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
	  return( 		
	  			React.DOM.ul(null,
				 React.DOM.span(null, "All Boats",
						{data: data}
		 		)
         	 )
	  	 )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);