/** @jsx React.DOM */

'use strict';
// tour cat deals with data

var AllBoatClass = require(['./assets/src/scripts/rboats']);

var tourCatWrapper = React.createClass({displayName: 'tourCatWrapper', 
	render:function(){
		   return (
        		React.DOM.ul({id:"boatname"}

        		)
        	)
		 }
    });

React.render(tourCatWrapper(null), document.getElementById('boat-list')
);