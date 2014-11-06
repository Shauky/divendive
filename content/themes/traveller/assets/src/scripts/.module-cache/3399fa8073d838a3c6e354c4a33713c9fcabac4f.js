/** @jsx React.DOM */
'use strict';
// Boats is for presentation, No change.
var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
	 	var boats = this.props.boats.map(function (boat, i){
	 		return BoatClass({boat: boat, key: i})

	 	});
        
        return(
            React.DOM.li({className:"boats"}, "All Boats",
	   			React.DOM.span(null, {boats: data},
					boats
							)
					  )
				)
	   		
			}		
   
	});

React.renderComponent(AllBoatClass(null), document.getElementById('boatname')
	);

var BoatClass = React.createClass({displayName: 'BoatClass',
		render: function(){
			var boat = this.props.boat;
			return(
					boat
				)
			}
		
		});