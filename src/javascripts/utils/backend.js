require('../lib/Stuff');

var extend = require('underscore').extend;
var Art = require('../components/Articles');
//var Art = require('../components/Art');
var CartStuff = Stuff('shopping_cart');

module.exports = {
  fetch() {

    var ToolBarActions = require('../action/ToolBarActions');
    
  /*   var data = Stuff('shopping_cart').map(function(id){
      var product = Stuff('shopping_cart').get(id);
      Art.id = id;
      return product;
    });*/

    //ToolBarActions.receiveCartData(data);
  },
  
 
  add(url) {
 console.log(url)
     /*var articleId = CartStuff.find(function(id){
      return CartStuff.get(id).url === url;
    });*/
    //var cartProduct;
     //cartProduct = CartStuff.get(url);
    CartStuff.add(extend({}, Art,{url:'111'}));     
    }
  }

