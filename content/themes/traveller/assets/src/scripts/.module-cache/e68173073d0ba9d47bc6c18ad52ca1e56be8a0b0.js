/** @jsx React.DOM */
'use strict';


var AllBoatClass =  React.createClass({displayName: 'AllBoatClass',
	//the data is handled and presented here. This is where everything happens
	 render: function(){
	 		var boats = this.props.boats.map(function(boat, i){
	 			return
	 			  <span boat={boat} key ={i}> </span> 
	 		});

		 return(
		 		React.DOM.dd(null,
						React.DOM.dt(null, 
						"All Boats Data Title", {boat})
						  )
 		  			)		
	    	}
	});

React.renderComponent(AllBoatClass(), document.getElementById('boats')
	);