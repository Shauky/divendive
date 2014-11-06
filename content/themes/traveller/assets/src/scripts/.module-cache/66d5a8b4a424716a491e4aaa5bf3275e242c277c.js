/** @jsx React.DOM */

'use strict';
// Boats is for presentation, No change.

var BoatData = React.createClass({displayName: 'BoatData',
	render: function(){
		return (React.DOM.tr(null, React.DOM.th({colSpan: "6"}, this.props.Name)
			)
		); 
	}
});

var BoatRow =  React.createClass({displayName: 'BoatRow',
	render:function(){
		var name = this.props.boat.Available ?
		           this.props.boat.Name :
			       React.DOM.span({style: {color: 'red'}}, 
			       	 this.props.boat.Name
            );
		return( 		
		React.DOM.tr(null, 
 			React.DOM.td(null, Name),
 				React.DOM.td(null, TourDate).substring(0,6),
 					React.DOM.td(null, TourEndDate).substring(0,6)

 				)
		 )

	}
});

var AllBoatList = React.createClass({displayName: 'AllBoatList',
render: function(){
	var rows = [];
	var lastAvailable = null;
	this.props.boats.forEach(function(boat){
		if(boat.Name !== lastAvailable){
			rows.push(BoatData({Name: boat.Name, key: boat.Name}));
			}
			rows.push(BoatRow({boat:boat, key:boat.Name }));
			lastAvailable = boat.Name;
	  });
	return(
		   	React.DOM.table(null, 
                React.DOM.thead(null, 
                    React.DOM.tr(null, 
                        React.DOM.th(null, "Name"), 
                        React.DOM.th(null, "Price")
                    )
                ), 
                React.DOM.tbody(null, rows)
            )
        );
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

React.render(AllBoatList({boats:data}), document.getElementById('boatname')
	);
