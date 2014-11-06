/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		var boats = this.props.boats.map(function(boat){
			return 
			 {boats}
		});

		return( 		
		React.DOM.li(null,
 			React.DOM.span({className:"boat"}),
	 		 	 {boatName:boat.Name,  
 					boatArr:(boat.TourDate).substr(0, 10),
 						boatDep:(boat.TourEndDate).substr(0, 10)
		 	})
		 )
	}
});

React.render(AllBoatClass({boat:boats}), document.getElementById('boatname')
	);


// var Data = { name: 'world' };

// var AllBoatClass = React.createClass({displayName: 'AllBoatClass',
//     render: function() {
//         return React.DOM.strong(null, this.props.data.name);
//     }
// });

// var Hello = React.createClass({displayName: 'Hello',
//     getInitialState: function() {
//         this.setProps({
//             data: { name: 'earth' }
//         });
//     },
//     render: function() {
//         return (
//             React.DOM.div(null, 
//                 "Hello ", AllBoatClass({data: this.props.data})
//                 )
//             )
//     }
// });

// React.render(Hello({data: Data}), document.getElementById('boatname'));