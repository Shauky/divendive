/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
	  return( 		
	  			React.DOM.li(null, "All Boats",
		 			React.DOM.span(null, {data: data})
		 		)
         	 )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);