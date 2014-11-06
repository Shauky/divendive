/** @jsx React.DOM */
'use strict';
// Boats is for presentation, No change.
var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		var boat;
	  return(
            React.DOM.li({className:"boats"},
            	React.DOM.span(null,
						{boats:data}
           )
	  	)
      )
	}
 });

React.renderComponent(AllBoatClass(null), document.getElementById('boatname')
	);