/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	boats: function(boat) {
			this.setState({boat:data})
		},
    
    getInitialState:function(){
			return {data:data};
		},
	
	render:function(){
		var boat = this.props.boats.map(function(boat) {
			return
				React.DOM.span({data:data.Name});
		});

	  return( 		
	  			React.DOM.li(null,
		 			React.DOM.span({className:"boat"}),
		 			 React.DOM.span(null,{
		 			 	boat:boat.Name

		 			  // 	 boatName:data[1].Name,  
		 					// boatArr:(data[1].TourDate).substr(0, 10),
		 					// 	boatDep:(data[1].TourEndDate).substr(0, 10)
		 						})
		 		)
         	 )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);