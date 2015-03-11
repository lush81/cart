var ShopComponent = require('./ShopComponent');
var CartComponent = require('./CartComponent');
var _ = require("underscore");

var React = require('react');

var AppComponent = React.createClass({
  render: function() {
    return ( 
      <div className = 'app'>
         <div className = 'shop'>
              <ShopComponent products = {this.props.products}/>
         < / div> 
         <div className = 'cart'>
             <CartComponent cart = {this.props.cart}/>
         < / div> 
    < / div>   
    );
  }                          
});

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