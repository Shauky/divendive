/** @jsx React.DOM */

var ProductCategoryRow = React.createClass({displayName: 'ProductCategoryRow',
    render: function() {
        return (React.DOM.tr(null, React.DOM.th({colSpan: "2"}, this.props.category)));
    }
});

var ProductRow = React.createClass({displayName: 'ProductRow',
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            React.DOM.span({style: {color: 'red'}}, 
                this.props.product.name
            );
        return (
            React.DOM.tr(null, 
                React.DOM.td(null, name), 
                React.DOM.td(null, this.props.product.price)
            )
        );
    }
});

var ProductTable = React.createClass({displayName: 'ProductTable',
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(ProductCategoryRow({category: product.category, key: product.category}));
            }
            rows.push(ProductRow({product: product, key: product.name}));
            lastCategory = product.category;
        });
        return (
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

var SearchBar = React.createClass({displayName: 'SearchBar',
    render: function() {
        return (
            React.DOM.form(null, 
                React.DOM.input({type: "text", placeholder: "Search..."}), 
                React.DOM.p(null, 
                    React.DOM.input({type: "checkbox"}), 
                    "Only show products in stock"
                )
            )
        );
    }
});

var FilterableProductTable = React.createClass({displayName: 'FilterableProductTable',
    render: function() {
        return (
            React.DOM.div(null, 
                SearchBar(null), 
                ProductTable({products: this.props.products})
            )
        );
    }
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
React.renderComponent(FilterableProductTable({products: PRODUCTS}), document.getElementById('sml-schedule')
	);