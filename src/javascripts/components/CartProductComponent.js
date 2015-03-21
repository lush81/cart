var _ = require("underscore");

var React = require('react');
var cartActions = require('../action/CartActions');

var CartProductComponent = React.createClass({
   removeFromCart: function (event) {
    event.preventDefault();
    //this.props.removeFromCart(this.props.product.id);
     cartActions.cartRemove(this.props.product.code);
  },

  changeQuantity: function(event) {
    var value = parseInt(event.target.value);
    //this.props.changeQuantity(this.props.product.id, value);
    cartActions.cartChangeQuantity(this.props.product.code, value);
  },
  
  render: function(){
    return (
        <div className="cartProductComp">
          <div className="row product">
            <img className="col-md-3" src={this.props.product.img} alt={this.props.product.title} />
            <div className="col-md-5">
              <h3>{this.props.product.title}</h3>
              <p>
                {this.props.product.description}
              </p>
            </div>

            <div className="price col-md-2">${this.props.product.price}</div>
            <div className="col-md-1">
              <input onChange={this.changeQuantity} type="number" min="1" className="form-control" value={this.props.product.quantity} />
   
            </div>
            <a onClick={this.removeFromCart} href="#" className="delete fui-cross"></a>
   
          </div>
        </div>
      )
  }
});

/*function CartProductComponent(product) {
  var html = [
    '<div class="row product">',
      '<img class="col-md-3" src="<%= product.img %>" alt="<%= product.title %>">',
      '<div class="col-md-5">',
        '<h3><%= product.title %></h3>',
        '<p>',
          '<%= product.description %>',
        '</p>',
      '</div>',

      '<div class="price col-md-2">$<%= product.price %></div>',
      '<div class="col-md-1">',
        '<input data-product="<%= product.id %>" type="number" min="1" class="form-control" value="<%= product.quantity %>" />',
      '</div>',
      '<a data-product="<%= product.id %>" href="#" class="delete fui-cross"></a>',
    '</div>'
  ].join('\n');

  return _.template(html)({
    product: product
  });
}*/
module.exports = CartProductComponent;