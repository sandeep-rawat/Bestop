var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var NavHeader = require('../components/navHeader.jsx'),
Footer = require('../components/footer.jsx');

module.exports = React.createClass({
  render: function () {
    return (
    	<div>
    	  <NavHeader/>
    	  <div className="main-container">
			  	<RouteHandler/>
			  </div>
			  <Footer />
			</div>  
    );
  }
});