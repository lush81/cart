var React = require('react');
//var Router = require('react-router');


var AppComponent = require('./components/AppComponent');
//var NewArtComponent = require('./components/NewArtComponent');
var articles = require('./components/Articles');
//var Backend = require('./utils/backend');
window.React = React;

React.render(
  <AppComponent  articles = {articles}/>,
  document.getElementById('app'));

//Router.HistoryLocation,

//var Route = Router.Route;
//var DefaultRoute = Router.DefaultRoute;

/*var routes = (
  <Route name="app" path="/" handler={App} >
    <DefaultRoute handler={App} />
    <Route name="articles" path="articles" handler={NewArtComponent} />
  
  </Route>
);*/

 // <Route name="article" path="articles/:id" handler={} />

/*Router.run(routes,  function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});*/

//Backend.fetch();