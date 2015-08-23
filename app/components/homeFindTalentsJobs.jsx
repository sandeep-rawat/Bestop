var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return (
      <div className="find-talents-jobs-capsules">
        <div className="container">
          <div className="row"> 
            <div className="col-xs-12 col-sm-4 col-sm-offset-2 col-lg-offset-2">
              <div className="capsule find-talents">
                <Link to="clients">
                  <h3>Clients in need of talent</h3>
                  <img src="../img/clientsPage.jpg" alt="" className="img-responsive"/>
                </Link>
              </div>  
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="capsule find-jobs">
                <Link to="jobseekers">
                  <h3>Talent in need of Jobs</h3>
                  <img src="../img/findJobs.jpg" alt="" className="img-responsive"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});  