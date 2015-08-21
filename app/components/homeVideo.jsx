var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="video well shadow">
        <iframe width="100%" height="100%" src="http://www.youtube.com/embed/u6XAPnuFjJc">
        </iframe>
      </div>
    );
  }
});