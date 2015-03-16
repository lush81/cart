var React = require('react');
var _ = require("underscore");
var ShopComponent = require('./ShopComponent');
var CartComponent = require('./CartComponent');
require("../lib/Stuff.js");
var CartStore = Stuff('shopping_cart');


var AppComponent = React.createClass({
  getInitialState: function() {
    return { cart: [] }
  },
  
  getCartState: function() {
    return CartStore.map(function (id) {
      var product = CartStore.get(id);
      product.id = id;
      return product;
    });
  },
 
 
  addToCart: function(code) {

    var cartProduct;
    var product = this.props.products.filter(function(product) {
      return product.code === code;
    })[0];

    var cartProductId = CartStore.find(function(id) {
      return CartStore.get(id).code === code;
    });

    if(cartProductId) {
      cartProduct = CartStore.get(cartProductId);
      cartProduct.quantity++;
      CartStore.update(cartProductId, cartProduct);
    } else {
      // Should clone this object
      product.quantity = 1;
      CartStore.add(product);
    }
    this.setState({
      cart: this.getCartState()
    })
  },
  removeFromCart: function(id) {
       CartStore.remove(id);
   this.setState({
      cart: this.getCartState()
    })
  },
  
  changeQuantity: function(id, value) {
     
   // var value = $(e.target).val();
    var product = CartStore.get(id);

    product.quantity = parseInt(value);
    CartStore.update(id, product);
  this.setState({
      cart: this.getCartState()
    })
  },
  
  render: function() {
    return (
      <div className="app">
        <ShopComponent products={this.props.products} addToCart={this.addToCart}/>
        <CartComponent 
         changeQuantity={this.changeQuantity}
          removeFromCart={this.removeFromCart}
      
      cart={this.state.cart}/>
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