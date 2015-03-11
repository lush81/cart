var ProductComponent = require('./ProductComponent');
var _ = require("underscore");

var React = require('react');

var ShopComponent = React.createClass({
  render: function() {
    var productList = this.props.products.map(function(product, index){
       return (<ProductComponent product={product} key={index} />)
    });
    return (
      <div className="shopComp">
        <h1>Shop</h1>
        <div className="row">
          {productList}
        </div>
      </div>
      )
  }
})


/*function ShopComponent(products) {
  var html = [
    '<h1>Shop</h1>',

    '<div class="row">',
      '<% products.forEach(function(product) {',
        'print(ProductComponent(product))',
      '}) %>',
    '</div>'
  ].join('\n');

  return _.template(html)({
    products: products,
    ProductComponent: ProductComponent
  });
}*/
module.exports = ShopComponent;