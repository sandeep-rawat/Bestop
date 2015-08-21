var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <header>
        <div className="image">
          <img src="../img/homepage.jpg"/>
          <h2 className="top-header">Digital talent of 21<sup>st</sup> century</h2>
          <h3 className="bottom-header">Specialize in sourcing digital talent to help fortune 500 firms and their preferred implementation partners to build next generation digital platforms century</h3>
        </div>
      </header>
    );
  }
});