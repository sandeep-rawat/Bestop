var React = require('react');
var ClientsForm = require('../components/clientsForm.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="container clients-page">
        <div className="row">
    			<div className="col-sm-6">
    				<ClientsForm/>	
    			</div>
    			<div className="col-sm-6">	
    			</div>
    		</div>
      </div>			
    );
  }
});