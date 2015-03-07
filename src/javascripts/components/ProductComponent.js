function ProductComponent(product) {
  var html = [
    '<a href="#" class="col-md-4 add-to-cart" data-product="<%= code %>">',
      '<img src="<%= img %>" alt="<%= title %>">',
    '</a>'
  ].join("\n");

  return _.template(html)(product);
}
module.exports = ProductComponent;