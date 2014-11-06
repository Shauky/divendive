/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
	var boat = this.props.boat;
	  return(
			React.DOM.span({className:"boat"}, 
				{boats:data})
           )
	}
});

React.render(AllBoatClass(null), document.getElementById('boats')
	);