var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
  		<div className="main-capsules">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-lg-offset-1">
              <div className="capsule digital-projects">
                <a href="#" className="">
                  <h3>
                    <div>Great Digital Projects</div>
                    <div>We provide best learning and growing experience to our consultants by only engaging in “end-customer” facing projects and not in “run the engine” maintenance projects</div>
                  </h3>
                  <img src="../img/digitalProjects.jpg" alt="" className="img-responsive"/>
                </a>
              </div>
              <div className="capsule in-house-research">
                <a href="#" className="">
                  <h3>
                    <div>Strong In-house Research</div>
                    <div>Engaging in cutting-edge research in machine learning, big data, UX, and text mining and are willing to collaborate & co-create with customers, consultants and academic institutes</div>
                  </h3>
                  <img src="../img/inHouseResearch.jpg" alt="" className="img-responsive"/>
                </a>
              </div>
              <div className="capsule top-grading">
                <a href="#" className="">
                  <h3>
                    <div>Top grading process</div>
                    <div>We’ve a proven “top grading” process to select the best talent for challenging technology engagements</div>
                  </h3>  
                  <img src="../img/topGrading.jpg" alt="" className="img-responsive"/>
                </a>
              </div>
              <div className="capsule social-responsibility">
                <a href="#" className="">
                  <h3>
                    <div>Corporate Social Responsibility</div>
                    <div>We like to play a pivotal role in community service & skill development and will match the contributions of our consultants</div>
                  </h3>
                  <img src="../img/socialResponsibility.jpg" alt="" className="img-responsive"/>
                </a>
              </div>  
            </div>
          </div>
        </div>
      </div>  
    );
  }
});