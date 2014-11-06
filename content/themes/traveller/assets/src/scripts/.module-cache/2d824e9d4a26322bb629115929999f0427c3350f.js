/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.
var boats = data;

var BoatsData = React.createClass({displayName: 'BoatsData',
	render: function(){
		var lBoats = this.props.boats.map(function(boat, i){

		return 
		 React.DOM.span({boat:boat.Name});
				}
			)
		}
	});

React.render(BoatsData({boat:boats}), document.body
	);

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