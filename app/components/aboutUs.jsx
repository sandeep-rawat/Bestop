var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="container about-us">
        <div className="section vision">
        	<div className="section-header">
	        	<h3>Vision:</h3>
	        	<h4>To be a reputed technology organization that bridges gap between businesses’ priorities and technology solutions</h4>
	        </div>
        </div>
        <div className="section mission">
        	<div className="section-header">
	        	<h3>Mission:</h3>
	       		<h4>To accomplish the vision with an exclusive focus on Digital technologies</h4>
        	</div>
        </div>
        <div className="section values">
        	<div className="section-header">
	        	<h3>Values:</h3>
						<h4>
							<ul>
								<li>Absolute Integrity</li>
								<li>Servant Leadership</li>
								<li>Hawk-eyed Customer Focus</li>
								<li>Responsible Global Citizenship</li>
							</ul>	
						</h4>	
					</div>	
        </div>
      </div>
    );
  }
});