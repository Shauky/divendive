/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var BoatData = React.createClass({displayName: 'BoatData',
	render: function(){
		return (React.DOM.tr(null, React.DOM.th({colSpan: "6"}, this.props.boats)
			)
		); 
	}
});

// var AllBoatData =  React.createClass({displayName: 'AllBoatData',
// 	render:function(){
// 		var name = this.props.boat.name :
// 		React.DOM.span({style: {color: 'red'}}, 
//                 this.props.boat.name
//             );
// 		return( 		
// 		React.DOM.re(null, 
//  			React.DOM.td(null, name),
//  				React.DOM.td(null, this.props.boat.DateArr)
//  					// boatArr:(data[0].TourDate).substr(0, 10),
//  					// 	boatDep:(data[0].TourEndDate).substr(0, 10),
//  					// 	 boatAvail:(data[0].Availability)
//  				)
// 		 )

// 	}
// });

React.render(BoatData({boats:data}), document.getElementById('boatname')
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