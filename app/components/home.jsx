var React = require('react');
var Link = require('react-router').Link;

var FeaturedJobs = require('../components/featuredJobs.jsx'),
JobsByEmail = require('../components/jobsByEmail.jsx'),
HomeHeader = require('../components/homeHeader.jsx'),
HomeVideo = require('../components/homeVideo.jsx')
HomeMainCapsules = require('../components/homeMainCapsules.jsx'),
HomeFindTalentsJobs = require('../components/homeFindTalentsJobs.jsx'),
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
          <HomeMainCapsules/>
          <HomeFindTalentsJobs/>
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-sm-offset-1">
              <FeaturedJobs />
            </div>
            <div className="col-xs-12 col-sm-5">
              <JobsByEmail/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});