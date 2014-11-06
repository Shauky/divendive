/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){

		var boat = this.props.boat;
		
		var boats = this.props.boat.map(function(boat, i){
			return 
			  React.DOM.p(null, {boat})
		});
	  
	  return(
            React.DOM.li({className:"boats"},
            	React.DOM.span({className:data}
           )
	  	)
      )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);