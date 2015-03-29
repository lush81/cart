var React = require("react");
var _ = require("underscore");

//var ProductComponent = require('../components/ProductComponent');

var ContentArticlesComponent = React.createClass({
  render: function() {
      return (
<div className = "contentComp">
<div id = "contentMain">
                <div id = "content">
                    <div class ="article">
                        <div ><a class = "titleArticle" href = "#"><h1><b>Life Lessons from Machine Learning</b></h1></a></div><!--End titleArticle-->
                        <div class = "bodyArticle">What comes to mind when you hear the term “Machine Learning”? 
						A bunch of programmers hunched over their computers in a dark room, working on something 
						completely virtual & divorced from reality? A group of scientists creating a Frankenstein
						monster	that has no resemblance to us whatsoever?
		               It may ...</div><!--End bodyArticle-->
                        <div class = "urlArticle"><a href="#">url</a></div><!--End urlArticle-->
                        
                    </div><!--End article-->
                </div><!--End content-->
            </div><!--End contentMain-->
        </div>
                   )
  }
})

module.exports=ContentArticlesComponent;