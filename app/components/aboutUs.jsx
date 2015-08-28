var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="container about-us">
        <div className="section vision">
        	<div className="section-header">
	        	<h2>Vision:</h2>
	        	<h3>To be a reputed technology organization that bridges gap between businesses’ priorities and technology solutions</h3>
	        </div>
          <img src="../img/vision.jpg" alt="" className="img-responsive"/>
        </div>
        <div className="section mission">
        	<div className="section-header">
	        	<h2>Mission:</h2>
	       		<h3>To accomplish the vision with an exclusive focus on Digital technologies</h3>
          </div>
          <img src="../img/mission.jpg" alt="" className="img-responsive"/>
        </div>
        <div className="section values">
        	<div className="section-header">
	        	<h2>Values:</h2>
						<h3>
							<ul>
								<li>Absolute Integrity</li>
								<li>Servant Leadership</li>
								<li>Hawk-eyed Customer Focus</li>
								<li>Responsible Global Citizenship</li>
							</ul>	
						</h3>
          </div>	
          <img src="../img/values.jpg" alt="" className="img-responsive"/>
        </div>
      </div>
    );
  }
});