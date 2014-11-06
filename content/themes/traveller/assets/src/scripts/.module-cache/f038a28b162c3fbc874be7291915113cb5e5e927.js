/** @jsx React.DOM */
'use strict';

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
 			  React.DOM.td(null, this.props.boat.TourDate.substr(0 ,10)),
 			   React.DOM.td(null, this.props.boat.TourEndDate.substr(0 ,10)),
 			   	 React.DOM.td(null, this.props.boat.Availability),
 				   React.DOM.td(null, this.props.boat.PersonPrice),
 					React.DOM.td(null, this.props.boat.Remarks),
 					  React.DOM.td(null, React.DOM.button({}, "Book"))
 			 )
		 )
	}
});

var AllBoatList = React.createClass({displayName: 'AllBoatList',
render: function(){
	var rows = [];
	var lastAvailable = null;
	this.props.boats.forEach(function(boat, i){
		if(boat.Available !== false){
			rows.push(BoatRow({boat:boat, key:boat.Available}));
			}
			rows.slice(BoatData({Name:boat.Name, key:i}));
			lastAvailable = boat.Available;
	  });
	return(
		   	React.DOM.table(null, 
                React.DOM.thead(null, 
                    React.DOM.tr(null, 
                        React.DOM.th(null, "Boat"), 
                        React.DOM.th(null, "Departs"),
                        React.DOM.th(null, "Arrives"),
                        React.DOM.th(null, "Openfor"),
                        React.DOM.th(null, "Price"),
                        React.DOM.th(null, "Route")	
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
		  }, {
		    "TourDate": "2014-11-25T18:25:43.511Z",
		    "TourEndDate": "2014-11-30T18:25:43.511Z",
		    "Available" : true,
		    "Availability": 6,
		    "PersonPrice": 1300.28,
		    "FCPrice": 0,
		    "Remarks": "Mle- Ari-Vaavu Atoll",
		    "Name": "Sing-Ray",
		    "id": "1"
		  }
		]
		
React.render(AllBoatList({boats:data}), document.getElementById('boat-list')
	);
