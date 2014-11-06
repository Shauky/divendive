/** @jsx React.DOM */
'use strict';


var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	 render: function(){
	 	var boats = this.props.boats.map(function(boat, i){
            return(
		 		React.DOM.dd(null,
						React.DOM.dt(null, 
						"All Boats Data Title"),
	 				  React.DOM.span({boat:boat, key:i}, ""
	 				  	) 
	 			    )
  			    )
              }
  			)		
    	}
	});

React.renderComponent(AllBoatClass(), document.getElementById('boats')
	);