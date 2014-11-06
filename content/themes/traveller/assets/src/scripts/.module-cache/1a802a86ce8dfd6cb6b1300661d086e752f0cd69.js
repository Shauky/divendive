/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.



var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
				var boat = data.map(function(boat, i){
					return (
						 	Boat({boat:boat, key:i})
						)
				});

	  		return( 		
	  			React.DOM.li(null,
		 			React.DOM.span({className:"boat"}, 
		 			  {boats:boat, 
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

var Boat = React.createClass({displayName: 'Boat',
	render:function() {
		var boat = this.props.boat;

		return( 
			React.DOM.li({className:"boat-listing"},
				React.DOM.span({boat:boat,
						boatName:boat[1].Name})
				)
			)
	}
});