/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.
var boats = {name: 'Name'};

var BoatsData = React.createClass({displayName: 'BoatsData',
	render: function(){
		return 
		 <span> {this.props.boats.name} </span>
		
			}
		});

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		this.setProps({
			boats: {name: 'Eagle Ray'}
		})
		return( 		
	  			React.DOM.li(null,
		 			React.DOM.span({className:"boat"}),
		 			 	 <BoatsData boats={this.props.boats} />
		 			 	)

		 		)
			}
});

React.render(AllBoatClass({boats:boats}), document.getElementById('boatname')
	);


// React.DOM.span({className:"boat"}),
// 		 			 	 "Hello" <BoatsData boats= {this.props.boat} />
// 		 			 	 , {boatName:boats.Name,  
// 		 					boatArr:(data[1].TourDate).substr(0, 10),
// 		 						boatDep:(data[1].TourEndDate).substr(0, 10)
// 		 						})