var _ = require("underscore");

var React = require('react');

var ProductComponent = React.createClass({
	render: function(){
		return (
			<div className="productComp">
				<a href="#" className="col-md-4 add-to-cart" data-product={this.props.product.code}>
     				<img src={this.props.product.img} alt={this.props.product.title} />
     			</a>
     		</div>
			)
	}
})
/*function ProductComponent(product) {
  var html = [
    '<a href="#" class="col-md-4 add-to-cart" data-product="<%= code %>">',
      '<img src="<%= img %>" alt="<%= title %>">',
    '</a>'
  ].join("\n");

  return _.template(html)(product);
}*/
module.exports = ProductComponent;