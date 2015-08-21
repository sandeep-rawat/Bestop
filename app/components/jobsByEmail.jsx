var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="jobs-by-email well shadow">
	      <form id="jobs-by-email" action="/addprofile" method="post">
	        <h4 className="text-info text-center">Jobs By Email</h4>
	        <div className="form-group row">
	          <div className="col-sm-6">
	          	<input name="firstname" type="text" placeholder="First Name" required="required" className="form-control"/>
	        	</div>
	        	<div className="col-sm-6">
	          	<input name="lastname" type="text" placeholder="Last Name" required="required" className="form-control"/>
	        	</div>
	        </div>
	        <div className="form-group row">
        		<div className="col-sm-6">
          		<input name="email" type="email" placeholder="Email Id" required="required" className="form-control"/>
        		</div>
        		<div className="col-sm-6">
          		<input name="phone" type="tel" placeholder="Phone" required="required" data-format="(ddd) ddd-dddd" className="form-control"/>
        		</div>
	        </div>	
	        <div className="form-group row">
        		<div className="col-sm-6">
	        		<select placeholder="Job Type" name="jobtype" className="form-control">
		            <option value="">Job Type</option>
		            <option>Contract</option>
		            <option>Contract and Permanent</option>
		            <option>Permanent</option>
		          </select>
	        	</div>
		        <div className="col-sm-6">
		        	  <select name="experience" className="form-control">
		            <option value="">Experience</option>
		            <option>0-3 Years</option>
		            <option>3-5 Years</option>
		            <option>5-8 Years</option>
		            <option>More Than 8 Years</option>
		          </select>
		        </div>
		      </div>  
	        <div className="form-group">
	          <textarea name="primarySkills" placeholder="Primary skills" className="form-control"></textarea>
	        </div>
	        <button id="submit" type="submit" className="btn btn-submit">Submit</button>
	        <input name="source" type="hidden" value="JobsByEmail"/>
	        <input name="title" type="hidden" value=""/>
	        <input name="covernote" type="hidden" value=""/>
	      </form>
	    </div>  
    );
  }
});