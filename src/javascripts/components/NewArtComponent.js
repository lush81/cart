var React = require('react');
var Link = require('react-router').Link;

var AddArticleComponent = require('./header/AddArticleComponent');
var SearchComponent = require('./header/SearchComponent');

var NewArtComponent= React.createClass({
 /* addArticle(url) {
    ArticleActions.addArticle(url);
  },*/

  render() {
    return (
      <div className='header-container'>
        <header>
          <h1>
            <Link to="app">Read Now</Link>
          </h1>
          <AddArticleComponent />
          <SearchComponent />
        </header>
      </div>
    );
  }
});

module.exports = NewArtComponent;