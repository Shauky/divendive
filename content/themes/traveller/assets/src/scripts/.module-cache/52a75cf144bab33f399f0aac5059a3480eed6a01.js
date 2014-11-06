/** @jsx React.DOM */
'use strict';


var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	//the data is handled and presented here. This is where everything happens
	 render: function(){
	     var boats = this.props.boats;
		 return(
		 		React.DOM.dd(null,
						React.DOM.dt(null, 
						"All Boats Data Title"),

		 		boats.map(function(boat, i){
		 			return
	 				  React.DOM.span({boat: boat, key: i}, "") 
	 			     }
	 			  )
  			   )
  			)		
    	}
	});

React.renderComponent(AllBoatClass(), document.getElementById('boats')
	);