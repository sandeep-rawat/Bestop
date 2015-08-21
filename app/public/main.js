var React = require("react");
var Router = require('react-router');
var Routes = require('../components/routes.jsx');

var mountNode = document.getElementById("react-main-mount");

Router.run(Routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, mountNode);
});