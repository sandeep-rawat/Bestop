var React = require('react');
var JobSeekersForm = require('../components/jobSeekersForm.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="container job-seekers">
        <div className="row">
    			<div className="col-sm-6">
    				<JobSeekersForm/>	
    			</div>
    			<div className="col-sm-6">	
    			</div>
    		</div>
      </div>
    );
  }
});