require("!style!css!less!../stylesheets/main.less");
var React = require('react');

var AppComponent = require('./components/AppComponent');
var products = require('./components/Products');
var Backend = require('./utils/backendSync');
window.React = React;

React.render(
  <AppComponent  products = {products}/>,
  document.getElementById('app'));

Backend.fetch();
