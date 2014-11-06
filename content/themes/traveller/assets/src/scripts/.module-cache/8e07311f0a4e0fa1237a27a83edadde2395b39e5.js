/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.



var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
				var boat = data.map(function(boat, i){
					console.log({boat});
		  		return( 		
		  			React.DOM.li(null,
		 			React.DOM.span({className:"boat"}, 
		 			  {
		 				boatName:data[0].Name,  
		 				  boatArr:(data[0].TourDate).substr(0, 10),
		 					boatDep:(boat[0].TourEndDate).substr(0, 10)
		 				})

		 		)
         	)
		});
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);