var appDispatcher = require('../dispatcher/CartDispatcher');
var constants = require('../constants/CartConstants');
var Backend = require('../utils/backendSync');

var Actions = {
  receiveCartData: function(data){
    appDispatcher.dispatch({
      actionType: constants.RECEIVE_CART_DATA,
      data:data})
  },
  
  cartAdd: function(code){
    appDispatcher.dispatch({
      actionType: constants.CART_ADD,
      code:code});
    Backend.add(code);
  },
  
  cartChangeQuantity: function(code, quantity){
    appDispatcher.dispatch({
      actionType: constants.CART_CHANGE_QUANTITY,
      code: code,
      quantity: quantity    
    });
   Backend.changeQuantity(code, quantity);
  },
  
  cartRemove: function(code){
     appDispatcher.dispatch({
      actionType: constants.CART_REMOVE,
      code:code});
    Backend.remove(code);
     
    }
  }
  
module.exports = Actions;
