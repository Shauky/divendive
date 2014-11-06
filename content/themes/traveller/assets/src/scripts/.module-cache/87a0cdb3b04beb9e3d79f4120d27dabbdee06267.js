/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var BoatData = React.createClass({displayName: 'BoatData',
	render: function(){
		return (React.DOM.tr(null, React.DOM.th({colSpan: "6"}, this.props.boats)
			)
		); 
	}
});

var AllBoatRow =  React.createClass({displayName: 'AllBoatRow',
	render:function(){
		var name = this.props.boat.Available ?
		           this.props.boat.Name :
			       React.DOM.span({style: {color: 'red'}}, 
			       	 this.props.boat.Name
            );
		return( 		
		React.DOM.tr(null, 
 			React.DOM.td(null, name)
 				)
		 )

	}
});

var data = [{ 
		    "TourDate": "2012-11-23T18:25:43.511Z",
		    "TourEndDate": "2012-11-30T18:25:43.511Z",
		    "Available" : true,
		    "Availability": 6,
		    "PersonPrice": 1309.28,
		    "FCPrice": 0,
		    "Remarks": "Mle- Ari-Vaavu Atoll",
		    "Name": "Eagle Ray",
		    "id": "0"
		  		}, {
		    "TourDate": "2014-11-23T18:25:43.511Z",
		    "TourEndDate": "2014-11-30T18:25:43.511Z",
		    "Available" : false,
		    "Availability": 6,
		    "PersonPrice": 1309.28,
		    "FCPrice": 0,
		    "Remarks": "Mle- Ari-Vaavu Atoll",
		    "Name": "Eagle Ray",
		    "id": "1"
		  }
		]

React.render(BoatData({boats:data}), document.getElementById('boatname')
	);
