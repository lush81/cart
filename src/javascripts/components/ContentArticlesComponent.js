var React = require("react");
var _ = require("underscore");

//var ProductComponent = require('../components/ProductComponent');

var ContentArticlesComponent = React.createClass({
  render: function() {
    
  /*   var articlesList = this.props.cart.map(function(product, index){
      // return (<CartProductComponent product={product} key={index} />)
     return( <CartProductComponent
         // changeQuantity={this.props.changeQuantity}
         // removeFromCart={this.props.removeFromCart}
          product={product}
          key={index}/>
           );
      
    }*/
    
      return (
<div className = "contentComp">
<div id = "contentMain">
                <div id = "content">
                    <div class ="article">
                        <div >
        <a class = "titleArticle" href = "#">
        <h1><b>Life Lessons from Machine Learning</b></h1>
        </a>
        </div>
                        <div class = "bodyArticle">What comes to mind when you hear the term “Machine Learning”? 
						A bunch of programmers hunched over their computers in a dark room, working on something 
						completely virtual & divorced from reality? A group of scientists creating a Frankenstein
						monster	that has no resemblance to us whatsoever?
		               It may ...</div>
                        <div class = "urlArticle"><a href="#">url</a></div><!--End urlArticle-->
                        
                    </div>
                </div>
            </div>
        </div>
                   )
  }
})

module.exports=ContentArticlesComponent;