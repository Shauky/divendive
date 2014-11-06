/** @jsx React.DOM */

'use strict';
// This does away with the original wrapper, putting tourcat div first

var tourCatWrapper = require(['./assets/src/scripts/boats']);
var FormData = require(['./node_modules/react-form-data/dist/FormDataMixin']);

var BoatForm = React.createClass({displayName: 'BoatForm',
	mixins: [FormData],
	
	componentWillMount: function() {
	    if (this.getInitialFormData != null) {
	      return this.formData = this.getInitialFormData();
	    } else {
	      return this.formData = {};
	    }
	  },
    updateFormData: function(e) {
	    var key, t;
	    t = e.target;
	    key = t.getAttribute('name');
	    this.formData[key] = getValue(t, this.formData[key]);
	    if (this.formDataDidChange != null) {
	      return this.formDataDidChange();
	    }
	  },
	handleSubmit: function(){
		var url = '/schedule-book';
		myRequestLib.post(url, this.formData);
	},
	render: function() {
		return 
			React.DOM.form({onChange:this.updateFormData, onSubmit:this.handleSubmit})
			
	}
});

var BoatWrapper =  React.createClass({displayName: 'BoatWrapper', 
  	render:function(){
	 	 return ( 
	 	 	 React.DOM.div({className:"all-boats"}, 
	 	      // React.DOM.form({className: "boat-search"},
	      	 // 	"Select by: Month",
	 	      // 	 React.DOM.select({}, 
	 	      // 	  React.DOM.option({value:"November"}, "November"),
	 	      // 	  	React.DOM.option({value:"December"}, "December")
	 	      //      )
	 	      // 	 ),
	 	      	React.DOM.div({id:'boat-list'}
	 	      	   )
	 	       )
	 	    )
	 	}
 });


React.render(BoatWrapper(null), document.getElementById('sml-schedule')
	);
