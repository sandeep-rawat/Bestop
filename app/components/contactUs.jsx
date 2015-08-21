var React = require('react');
var Map = require('../components/map.jsx');


module.exports = React.createClass({
  render: function () {
    return (
      <div className="container contact-us">
      	<div className="row">
      		<div className="col-sm-3">	
      			<div className="address">
      				<strong>BestOp LLC</strong><br/>
      				<span>2500 Harborside Financial Center</span><br/>
      				<span>Plaza Five, Ste # 2530</span><br/>
      				<span>Jersey City, NJ 07311</span><br/><br/>
      				<strong>Ph. +1 646 666 7453</strong><br/>
      				<strong>Fax +1 646 666 7454</strong><br/>
      				<strong> <a href="mailto:info@bestopconsulting.com">info@bestopconsulting.com</a></strong>
      			</div>
      		</div>
    			<div className="col-sm-5">
    				<Map/>
    			</div>
    			<div className="col-sm-4">
    				<img src="../img/contactus.jpg"/>
    			</div>
    		</div>	
      </div>
    );
  }
});