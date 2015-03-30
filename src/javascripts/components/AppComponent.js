var React = require('react');
var Reflux = require('reflux');

var ToolsBarComponent = require('./ToolsBarComponent');
var FooterBarComponent = require('./FooterBarComponent');
var ContentArticlesComponent = require('./ContentArticlesComponent');
var articles = require('./Articles');

//var CartStore =  require('../stores/CartStore');/////

var AppComponent = React.createClass({
  // mixins: [Reflux.connect(CartStore, 'articles')],/////
  
  //getInitialState: function() {
  //  return { articles: []}
//  },
  
   render: function() {
    return (
      <div className="app">
       
       <ToolsBarComponent  />
        <ContentArticlesComponent articles={this.props.articles} />
      <FooterBarComponent  />
      </div>
    );
  }
})


module.exports = AppComponent;