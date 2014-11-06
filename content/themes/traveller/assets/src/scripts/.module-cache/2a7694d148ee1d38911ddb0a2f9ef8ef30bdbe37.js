/** @jsx React.DOM */
'use strict';
// Boats is for presentation, No change.
var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
		var boats = this.props.boats.map(function(boat, i){
			return 
			  <li> boat:Name </li>,
			  <li> key:i </li>
		});

	return(
            React.DOM.li({className:"boats"},
            	React.DOM.span({className:"boat"}

            	)
	  	)
      )
	}
 });

React.renderComponent(AllBoatClass(null), document.getElementById('boatname')
	);