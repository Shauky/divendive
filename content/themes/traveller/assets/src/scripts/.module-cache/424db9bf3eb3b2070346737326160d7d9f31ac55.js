/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		
        var boat = this.props.boat;

		var boat = this.props.boat.map(function(blist, i){
			return (
				React.DOM.span(null, {boat:boat, key: i})
			)
		});

	  return( 		
	  			React.DOM.li(null, "All Boats",
		 			React.DOM.span({className:"boat"}, {boat:data})
		 		)
         	 )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);