/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		var boat = this.props.boat.map(function(boat, i){
			return (
			  React.DOM.li({className:"boats"}, {boat:boat, 
			  key:i}
			 	)
			  )
		});

	  return( 		
	  			React.DOM.li(null,
		 			React.DOM.span({className:"boat"}),
		 			 React.DOM.span(null,{boat:data,
		 			 	 boatName:data[1].Name,  
		 					boatArr:(data[1].TourDate).substr(0, 10),
		 						boatDep:(data[1].TourEndDate).substr(0, 10)
		 						})
		 		)
         	 )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);