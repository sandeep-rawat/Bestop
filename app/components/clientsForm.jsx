var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
			<form action="/addprofile" method="post" encType="multipart/form-data" className="form-horizontal">
				<div className="clearfix">
					<strong>Please provide the information below.</strong><br/>
					<em>We will contact you to discuss the requirements</em>
				</div>
				<div className="form-group">
					<input id="title" name="title" type="text" placeholder="Job Title" required="required" className="form-control"/>
				</div>
				<div className="form-group">
					<input id="location" name="location" type="text" placeholder="Location" required="required" className="form-control"/>
				</div>		
				<div className="form-group">
					<input id="company" name="company" type="text" placeholder="Company" required="required" className="form-control"/>
				</div>
				<div className="form-group">
					<select placeholder="Job Type" name="type" className="form-control">
						<option value="">Job Type</option>
						<option>Contract</option>
						<option>Contract and Permanent</option>
						<option>Permanent</option>
					</select>
				</div>
				<div className="form-group">
					<select id="experience" name="experience" className="form-control">
						<option value="">Experience</option>
						<option>0-3 Years</option>
						<option>3-5 Years</option>
						<option>5-8 Years</option>
						<option>More Than 8 Years</option>
					</select>
				</div>
				<div className="form-group">
					<textarea id="description" name="description" type="text" placeholder="Job Description" className="form-control">
					</textarea>
				</div>
				<div className="form-group">
					<textarea id="requiredskills" name="requiredskills" type="text" placeholder="Required Skills" className="form-control">
					</textarea>
				</div>
				<div className="form-group">
					<textarea id="desiredskills" name="desiredskills" type="text" placeholder="Desired Skills" className="form-control">
					</textarea>
				</div>
				<div className="form-group">
					<input id="name" name="name" type="text" placeholder="Your Name" required="required" className="form-control"/>
				</div>
				<div className="form-group">
					<input id="email" name="email" type="email" placeholder="Your Email" required="required" className="form-control"/>
				</div>		
				<div className="form-group">
					<input id="phone" name="phone" type="phone" placeholder="Your Phone" required="required" className="form-control"/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn">Submit</button>
				</div>
			</form>
		);	
	}
});