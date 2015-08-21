var React = require('react');
var Link = require('react-router').Link;

var FeaturedJobs = require('../components/featuredJobs.jsx'),
JobsByEmail = require('../components/jobsByEmail.jsx'),
HomeHeader = require('../components/homeHeader.jsx'),
HomeVideo = require('../components/homeVideo.jsx')
HomeCapsules = require('../components/homeCapsules.jsx'),
HomeThoughtLeadership = require('../components/homeThoughtLeadership.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="home">
        <HomeHeader/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
             <HomeVideo/>
            </div>
            <div className="col-xs-12 col-sm-6">
              <HomeThoughtLeadership />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <Link to="clients" className="capsule find-talents">
                <h3>Clients in need of talent</h3>
                <img src="../img/findJobs.jpg" alt="" className="img-responsive"/>
              </Link>
             </div>
            <div className="col-xs-12 col-sm-6">
              <Link to="jobseekers" className="capsule find-jobs">
                <h3>Talent in need of Jobs</h3>
                <img src="../img/findJobs.jpg" alt="" className="img-responsive"/>
              </Link>
             
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-sm-offset-1">
              <FeaturedJobs />
            </div>
            <div className="col-xs-12 col-sm-5">
              <JobsByEmail/>
            </div>
          </div>
          <HomeCapsules/>
        </div>
      </div>
    );
  }
});