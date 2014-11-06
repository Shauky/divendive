/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){

		var boats = this.props.boats;

		var boat =  boats.map(function(boat, i){
			return 
			  React.DOM.p({className:"boats"}, {boat})
		});
	  
	  return(
            React.DOM.li({className:"boats"},
            	React.DOM.span(null,
            		{boat}
           )
	  	)
      )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);