/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.
var boats = data;
var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	render:function(){
	var boat = this.props.boats.map(function(boat, i){
	  return(
            React.DOM.li({className:"boats"},
            	React.DOM.span({className:"boatli"}, {boats}

           )
	  	)
      )
	 });
	}
});

React.render(AllBoatClass(null), document.getElementById('boatname')
	);