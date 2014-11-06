/**@jsx React.DOM */

"use strict";

var contactWrapper = React.createClass({displayName: "ContactWrapper",
	render: function(){
		return
		React.DOM.div({className:"contactForm"}, "Contact Us",
			React.DOM.section({className:"post-content"}, "form as form",
				React.DOM.form({id:"contactForm"},
					React.DOM.input({type:"text"}, "Name:"),
					 React.DOM.input({type:"text"}, "Company:"),
						React.DOM.input({type:"text"}, "Designation: "), 
						React.DOM.input({type:"text"}, "Address1: "),
						React.DOM.input({type:"text"}, "Address2: "),

						React.DOM.input({type:"text"}, "Country: "),
						React.DOM.input({type:"textt"}, "Business Phone: "),
						React.DOM.input({type:"text"}, " Email: ")
					)
				)
			)
		}
	});

React.renderComponent(null, {contactWrapper})