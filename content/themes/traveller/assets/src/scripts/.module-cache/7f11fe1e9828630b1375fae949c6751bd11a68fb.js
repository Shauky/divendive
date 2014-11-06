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
		           this.props.boat.Available :
			       React.DOM.span({style: {color: 'red'}}, 
			       	 this.props.boat.Available
            );
		return( 		
		React.DOM.tr(null, 
 			React.DOM.td(null, this.props.boat.Name),
 				React.DOM.td(null, this.props.boat.TourDate),
 					React.DOM.td(null, this.props.boat.TourEndDate)

 				)
		 )

	}
});

var AllBoatList = React.createClass({displayName: 'AllBoatList',
render: function(){
	var rows = [];
	var lastAvailable = null;
	this.props.boats.forEach(function(boat){
		if(boat.Available !== false){
			rows.push(BoatRow({boat:boat, key:boat.Available}));
			}
			rows.push(BoatData({Name:boat.Name, key:boat.id}));
			lastAvailable = boat.Available;
	  });
	return(
		   	React.DOM.table(null, 
                React.DOM.thead(null, 
                    React.DOM.tr(null, 
                        React.DOM.th(null, "Name"), 
                        React.DOM.th(null, "Start Date"),
                        React.DOM.th(null, "End Date")
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
		    "Available" : false,
		    "Availability": 6,
		    "PersonPrice": 1309.28,
		    "FCPrice": 0,
		    "Remarks": "Mle- Ari-Vaavu Atoll",
		    "Name": "Eagle Ray",
		    "id": "0"
		  		}, {
		    "TourDate": "2014-11-23T18:25:43.511Z",
		    "TourEndDate": "2014-11-30T18:25:43.511Z",
		    "Available" : true,
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
