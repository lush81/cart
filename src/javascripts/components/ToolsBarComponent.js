var React = require("react");
var _ = require("underscore");

//var ProductComponent = require('../components/ProductComponent');

var ToolsBarComponent = React.createClass({
  render: function() {
      return (
     
      <div className = "ToolBarComp">
      <div id = "headerMain">
                
                <div id = "readNow">
                    <h3><a href = "#" onClick = "">Read Now</a></h3>
                </div>
                <div id = "search">
                    <!--<form>-->
                    <input id = "inputUrl" type = "text" placeholder = "http://..." />
                    <button  type = "submit" onClick = "buttonAddUrl();">+ ADD URL</button>
                    <!--</form>-->
                </div>


                <div id = "centerHeader">
                    <h3><a id = "showAll" href = "#" onClick = "showAll()">Show All</a></h3>
                </div>
                <div id = "leftHeader">
                    <input id = "inputSearch" type = "search" placeholder = "Search" onClick = "search()" />
                </div>
                
            </div>
            
    </div>
    
            )
  }
})


module.exports = ToolsBarComponent;