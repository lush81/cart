var ProductComponent = require('./ProductComponent');

function ShopComponent(products) {
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
}
module.exports = ShopComponent;