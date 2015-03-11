var CartProductComponent = require('./CartProductComponent');
var _ = require("underscore");

var React = require('react');

var CartComponent = React.createClass({
  render: function() {
    var cartList = this.props.cart.map(function(product, index){
       return (<CartProductComponent product={product} key={index} />)
    });
    var total = this.props.cart.reduce(function(total, p) {
      return total += p.price * p.quantity;
    }, 0);
    return (
      <div className="cartComp">
        <h1>Your order</h1>

        {cartList}
        <div className="row">
          <div className="total col-md-3">
            Total: <span className="total-amount">$ {total}</span>
          </div>
        </div>
      </div>
      )
  }
})
/*function CartComponent(cart) {
  var html = [
    '<h1>Your order</h1>',

    '<% cart.forEach(function(product) {',
      'print(CartProductComponent(product))',
    '}) %>',

    '<div class="row">',
      '<div class="total col-md-3">',
        'Total: <span class="total-amount">$<%= total %></span>',
      '</div>',
    '</div>'
  ].join("\n");

  var total = cart.reduce(function(s, product) {
    return s += product.price * product.quantity;
  }, 0);

  return _.template(html)({
    cart: cart,
    total: total,
    CartProductComponent: CartProductComponent
  });
}*/

module.exports = CartComponent;