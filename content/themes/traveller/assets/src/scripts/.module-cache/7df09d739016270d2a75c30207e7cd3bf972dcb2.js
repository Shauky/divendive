/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.



var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
				var boat = data.map(function(boat, i){
		  		return( 		
		  			React.DOM.li(null,
		 			React.DOM.span({className:"boat"}, 
		 			  {boats:boat, 
		 				 boatName:boat[i].Name,  
		 					boatArr:(boat[i].TourDate).substr(0, 10),
		 						boatDep:(boat[i].TourEndDate).substr(0, 10)
		 				})
		 		)
         	)
		});
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);