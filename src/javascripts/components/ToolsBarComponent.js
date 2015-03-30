var React = require("react");
var _ = require("underscore");

//var ProductComponent = require('../components/ProductComponent');

var ToolsBarComponent = React.createClass({
  render: function() {
      return (
     
      <div className = "ToolBarComp">
      <div className = "headerMain">
                
                <div className = "readNow">
                    <h3><a href = "#" onClick = "">Read Now</a></h3>
                </div>
                <div className = "search">
                    <!--<form>-->
                    <input className = "inputUrl" type = "text" placeholder = "http://..." />
                    <button  type = "submit" onClick = "buttonAddUrl();">+ ADD URL</button>
                    <!--</form>-->
                </div>


                <div className = "centerHeader">
                    <h3><a className = "showAll" href = "#" onClick = "showAll()">Show All</a></h3>
                </div>
                <div className= "leftHeader">
                    <input className = "inputSearch" type = "search" placeholder = "Search" onClick = "search()" />
                </div>
                
            </div>
            
    </div>
    
            )
  }
})


module.exports = ToolsBarComponent;