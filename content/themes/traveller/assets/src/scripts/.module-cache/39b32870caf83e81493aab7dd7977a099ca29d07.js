/** @jsx React.DOM */
'use strict';
// tour cat deals with data
var data = [
  		{
		    "TourDate": "2012-11-23T18:25:43.511Z",
		    "TourEndDate": "2012-11-30T18:25:43.511Z",
		    "Availability": 6,
		    "PersonPrice": 1309.28,
		    "FCPrice": 0,
		    "Remarks": "Mle- Ari-Vaavu Atoll",
		    "Name": "Eagle Ray",
		    "id": "0"
		  		},
		  	{
		    "TourDate": "2014-11-23T18:25:43.511Z",
		    "TourEndDate": "2014-11-30T18:25:43.511Z",
		    "Availability": 6,
		    "PersonPrice": 1309.28,
		    "FCPrice": 0,
		    "Remarks": "Mle- Ari-Vaavu Atoll",
		    "Name": "Eagle Ray",
		    "id": "1"
		  }
		]

var AllBoatClass = require(["./assets/src/scripts/boats"]);
// Tour cat just holds the data. The actual boats file handles presentation
var tourCatWrapper = React.createClass({displayName: 'tourCatWrapper', 
	render:function(){
		//change
		var boats = this.props.boats.map(function(boat, i) {
		 		return AllBoatClass({boat:boat}, {key:i})
		 });

	  	return (
		   React.DOM.ul({id:"boats", className: "boats"}, "All Boats Come here", 
	       		React.DOM.li({className: "boats"}),
	     			{boats}
	     	)
		)
    }
});

React.renderComponent(tourCatWrapper(null), document.getElementById('boat-list')
	);