var React = require('react');
var _ = require("underscore");
var ShopComponent = require('./ShopComponent');
var CartComponent = require('./CartComponent');
//require("../lib/Stuff.js");
//var CartStore = Stuff('shopping_cart');
var CartStore =  require('../stores/CartStore');

var AppComponent = React.createClass({
  getInitialState: function() {
    return { cart: []}
  },
  
 
  
  componentWillMount() {
    CartStore.addChangeListener(this.updateState);
  },

  componentWillUnmount() {
    CartStore.removeChangeListener(this.updateState);
  },

  updateState() {
    this.setState({ cart: CartStore.getProducts() });
  },
  
  render: function() {
    return (
      <div className="app">
       
       <ShopComponent products={this.props.products} />
        <CartComponent cart={this.state.cart} />
      
      </div>
    );
  }
})

/*function AppComponent(state) {
  var html = [
    '<div class="shop">',
      '<% print(ShopComponent(products)) %>',
    '</div>',

    '<div class="cart">',
      '<% print(CartComponent(cart)) %>',
    '</div>',
  ].join("\n");

  state.ShopComponent = ShopComponent;
  state.CartComponent = CartComponent;

  return _.template(html)(state);
}*/

module.exports = AppComponent;