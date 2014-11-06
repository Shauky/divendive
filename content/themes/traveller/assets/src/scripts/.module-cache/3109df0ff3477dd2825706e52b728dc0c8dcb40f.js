/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		var boats = this.props.boats;
	  return( 		
	  			React.DOM.dl(null,
						React.DOM.dt(null, 
						"All Boats Data Title"),
						{data: data}

		 		)
           )
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);