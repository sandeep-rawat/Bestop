var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
			<form action="/" method="post" encType="multipart/form-data" className="form-horizontal">
				<div className="clearfix">
					<strong>Please attach your resume and fill the details below.</strong>
				</div>
				<div className="form-group">
					<input id="firstname" name="firstname" type="text" placeholder="First Name" required="required" className="form-control"/>
				</div>
				<div className="form-group">
					<input id="lastname" name="lastname" type="text" placeholder="Last Name" required="required" className="form-control"/>
				</div>		
				<div className="form-group">
					<input id="emailid" name="email" type="email" placeholder="Email" required="required" className="form-control"/>
				</div>
				<div className="form-group">
					<input id="name" name="phone" type="text" placeholder="Phone" required="required" className="form-control"/>
				</div>
				<div className="form-group">
					<input id="title" name="title" type="text" placeholder="Title" className="form-control"/>
				</div>
				<div className="form-group">
					<textarea id="primaryskills" name="primary" type="text" placeholder="Primary Skills" className="form-control">
					</textarea>
				</div>
				<div className="form-group">
					<textarea id="secondaryskills" name="secondary" type="text" placeholder="Primary Skills" className="form-control">
					</textarea>
				</div>
				<div className="form-group">
					<textarea id="covernote" name="covernote" type="text" placeholder="Cover Note" className="form-control">
					</textarea>
				</div>
				<div className="form-group">
					<button type="submit" className="btn">Submit</button>
				</div>
			</form>
		);	
	}
});