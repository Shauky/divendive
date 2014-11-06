/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	getInitialState: function(){ 
		return {
			filter_by: '',
			sort_by: 'Name'
		}

	},

	render:function(){
	  return(
            React.DOM.li({className:"boats"},
            	React.DOM.span(null,
						{boats:data}
           )
	  	)
      )
	}
 });

React.render(AllBoatClass(null), document.getElementById('boatname')
	);