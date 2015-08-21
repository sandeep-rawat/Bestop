var React = require("react");
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;

// Components
var App = require("../components/app.jsx");
var Home = require('../components/home.jsx');
var AboutUs = require('../components/aboutUs.jsx');
var OurOfferings = require('../components/ourOfferings.jsx');
var Rnd = require('../components/rnd.jsx');
var ContactUs = require('../components/contactUs.jsx');
var ClientsPage = require('../components/clientsPage.jsx');
var JobSeekers = require('../components/jobSeekers.jsx');

var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={Home}/>
    <Route name="aboutus" path="/aboutus" handler={AboutUs}/>
    <Route name="ourofferings" path="/ourofferings" handler={OurOfferings}/>
    <Route name="rnd" path="/rnd" handler={Rnd}/>
    <Route name="contactus" path="/contactus" handler={ContactUs}/>
    <Route name="clients" path="/clients" handler={ClientsPage}/>
    <Route name="jobseekers" path="/jobseekers" handler={JobSeekers}/>
    <DefaultRoute name="default" handler={Home}/>
  </Route>
);