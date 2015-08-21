var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return (
			<nav className="navbar navbar-fixed-top">
		    <div className="container">
		      <div className="row">
		        <div className="col-xs-8 col-sm-5">
		          <Link to="home">
		            <img id="logo" className="logo" src="/img/bestop-logo.jpg" alt="Bestop Consulting" title="Bestop Consulting"/>
		          </Link>
		        </div>
		        <div className="col-xs-12 col-sm-7">
		          <div className="navbar-header">
		                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="true">
		                  <span className="sr-only">Toggle navigation</span>
		                  <span className="icon-bar"></span>
		                  <span className="icon-bar"></span>
		                  <span className="icon-bar"></span>
		              </button>
		          </div>
		          <nav id="bs-navbar" className="navbar-collapse collapse in" aria-expanded="true">
		              <ul className="nav navbar-nav navbar-right">
		                <li role="presentation"><Link to="aboutus">About Us</Link></li>
		                <li role="presentation"><Link to="ourofferings">Our offerings</Link></li>
		                <li role="presentation"><Link to="/rnd">R&D</Link></li>
		                <li role="presentation"><Link to="/contactus">Contact Us</Link></li>
		              </ul>
		          </nav>
		        </div>
		      </div>
		    </div>
		  </nav>
    );
  }
});