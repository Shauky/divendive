/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var DataClass = React.createClass({
	render: function(){
		return <span>{this.props.data.name}</span>; 
	}
});

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	renderHandler:function(){
		this.setProps({
			data: {name:'Eagle Ray'}
		});
	},
	render:function(){
		return( 		
		React.DOM.li(null, "Boat Name", "Tour Start",
			React.DOM.br(null),
 			React.DOM.span({onLoad:this.renderHandler, className:"boat"}),
	 		 	 {boatName:data.Name
 					// boatArr:(data[0].TourDate).substr(0, 10),
 					// 	boatDep:(data[0].TourEndDate).substr(0, 10),
 					// 	 boatAvail:(data[0].Availability)
		 	})
		 )
	}
});

React.render(AllBoatClass({boats:data}), document.getElementById('boatname')
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