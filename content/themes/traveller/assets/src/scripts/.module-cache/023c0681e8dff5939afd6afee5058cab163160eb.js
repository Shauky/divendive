/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.
// var boats = data;

// var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
// 	render:function(){
// 		return( 		
// 	  			React.DOM.li(null,
// 		 			React.DOM.span({className:"boat"}),
// 		 			 	 {boatName:data[1].Name,  
// 		 					boatArr:(data[1].TourDate).substr(0, 10),
// 		 						boatDep:(data[1].TourEndDate).substr(0, 10)
// 		 						})
// 		 		)
// 	}
// });

// React.render(AllBoatClass({data:data}), document.getElementById('boatname')
// 	);


var Data = { name: 'world' };

var AllBoatClass = React.createClass({displayName: 'AllBoatClass',
    render: function() {
        return React.DOM.strong(null, this.props.data.name);
    }
});

var Hello = React.createClass({displayName: 'Hello',
    getInitialState: function() {
        this.setProps({
            data: { name: 'earth' }
        });
    },
    render: function() {
        return (
            React.DOM.div(null, 
                "Hello ", World({data: this.props.data})
                )
            )
    }
});

React.renderComponent(Hello({data: Data}), document.getElementById('boatname'));