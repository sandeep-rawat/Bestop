var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
  		<div className="row main-capsules">
        <div className="col-sm-10 col-sm-offset-1 col-lg-offset-1">
          <div className="capsule digital-projects">
            <a href="#" className="">
              <h3>Great Digital Projects</h3>
              <h4></h4>
              <img src="../img/digitalProjects.jpg" alt="" className="img-responsive"/>
            </a>
          </div>
          <div className="capsule in-house-research">
            <a href="#" className="">
              <h3>Strong In-house Research</h3>
              <h4></h4>
              <img src="../img/inHouseResearch.jpg" alt="" className="img-responsive"/>
            </a>
          </div>
          <div className="capsule top-grading">
            <a href="#" className="">
              <h3>Top grading process</h3>
              <h4>We’ve a proven “top grading” process to select the best talent for challenging technology engagements</h4>
              <img src="../img/topGrading.jpg" alt="" className="img-responsive"/>
            </a>
          </div>
          <div className="capsule social-responsibility">
            <a href="#" className="">
              <h3>Corporate Social Responsibility</h3>
              <h4></h4>
              <img src="../img/socialResponsibility.jpg" alt="" className="img-responsive"/>
            </a>
          </div>  
        </div>
      </div>  
    );
  }
});