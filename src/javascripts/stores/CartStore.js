//require('array.prototype.find');
var extend = require('underscore').extend;
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/CartDispatcher');
var CartConstants = require('../constants/CartConstants');
var CartActions = require('../action/CartActions');

var PRODUCTS = require('../components/Products');
var CHANGE_EVENT = 'change';

var _cart = [];


function _receiveCartData(data) {
  _cart = data;
}


function _cartAdd1(code) {
  var cartProduct;

  var product = PRODUCTS.filter(function (product) {
    return product.code === code;
  })[0];
  
  //var productIsInCart = _cart.some(function(p) { return p.id == product.id ;});

  if(CartStore.isInCart(product)) {
    cartProduct = CartStore.getProduct(code);
    cartProduct.quantity++;
    
  } else {
    cartProduct = extend({}, product, { quantity: 1 });
    _cart.push(cartProduct);
  }
}


function _cartRemove(code) {
  var cartProduct = CartStore.getProduct(code);
  _cart.splice(_cart.indexOf(cartProduct), 1);
}


function _changeQuantity(code, quantity) {
  var cartProduct = CartStore.getProduct(code);
  cartProduct.quantity = quantity;
}


var CartStore = extend({}, EventEmitter.prototype, {
  isInCart(product) {
   return _cart.some(function(p) { return p.code == product.code });
  },

  getProducts() {
    return _cart;
  },

  getProduct(code) {
    return _cart.filter(function(p) { return p.code == code ;})[0];
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  //var action = payload.action;

  switch(action.actionType) {
    case CartConstants.RECEIVE_CART_DATA:
      _receiveCartData(action.data);
      break;

   case CartConstants.CART_ADD:
   // case '1':
      _cartAdd1(action.code);
      console.log(action.code)
      break;

      //case 1
    case CartConstants.CART_REMOVE:
      _cartRemove(action.code);
      break;

    case CartConstants.CART_CHANGE_QUANTITY:
      _changeQuantity(action.code, action.quantity);
      break;

    default:
      return true;
  }

  CartStore.emitChange();

  return true;
});

module.exports = CartStore;