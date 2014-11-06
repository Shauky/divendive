/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.
var boats = data;

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		return( 		
	  			React.DOM.li(null,
		 			React.DOM.span({className:"boat"}),
		 			 	 {boatName:data[1].Name,  
		 					boatArr:(data[1].TourDate).substr(0, 10),
		 						boatDep:(data[1].TourEndDate).substr(0, 10)
		 						})
		 		)
	}
});

React.render(AllBoatClass({data:data}), document.getElementById('boatname')
	);