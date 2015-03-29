var React = require('react');

var AppComponent = require('./components/AppComponent');
var articles = require('./components/Articles');
//var Backend = require('./utils/backendSync');
window.React = React;

React.render(
  <AppComponent  articles = {articles}/>,
  document.getElementById('app'));

//Backend.fetch();