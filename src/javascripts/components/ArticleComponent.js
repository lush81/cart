var React = require('react');

var ArticleComponent = React.createClass({
  render: function() {
return (
<div className = "contentComp">
   <div id = "contentMain">
      <div id = "content">
         <div class ="article">
           <div >
               <a class = "titleArticle" href = "#" onClick = {this.a}>
                  <h1><b>{this.props.article.title}</b></h1>
               </a>
            </div>
            <div class = "bodyArticle">{this.props.article.content} ...</div>
            <div class = "urlArticle"><a href="#"  onClick = {this.b}>{this.props.article.url}</a></div>
         </div>
      </div>
   </div>
</div>
                   )
  }
})

module.exports=ArticleComponent;