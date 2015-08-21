var React = require('react');
var $ = require('jquery');

module.exports =  React.createClass({
  componentDidMount: function() {
    $.get('/api/jobs', function(result) {
      if (this.isMounted()) {
        this.setState({
          jobs: result 
        });
      }
    }.bind(this));
  },
  render: function () {
  	return (
      <div className="featured-jobs well shadow">
        <h4 className="text-info text-center">Featured Jobs</h4>
        <ul>
					{
						this.state && this.state.jobs.map(function(job){
              return (
                <li key={job.id}>
                	<a href="#">
                		{job.title} ({job.location})
                	</a>
                </li>	
              )
          	})
					}
        </ul>
      </div>
    );
  }
});