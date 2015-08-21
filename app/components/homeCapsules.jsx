var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
			<div className="row">
        <div className="col-xs-12 col-sm-4">
          <a href="#" className="capsule digital-talent">
            <img src="../img/digitalTalent.jpg" alt="" className="img-responsive"/>
          </a>
        </div>
        <div className="col-xs-12 col-sm-4">
          <a href="#" className="capsule  social-responsibility">
            <img src="../img/socialResponsibility.jpg" alt="" className="img-responsive"/>
          </a>
        </div>
        <div className="col-xs-12 col-sm-4">
          <a href="#" className="capsule top-grading">
            <img src="../img/topGrading.jpg" alt="" className="img-responsive"/>
          </a>
        </div>
      </div>
    );
  }
});