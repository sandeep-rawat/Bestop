var React = require('react');
var Router = require('react-router');

// React App components and api
var routes = require('../components/routes.jsx');

module.exports = function(app) {

	app.get('/', function(req, res){
		Router.run(routes, '/', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});

	app.get('/home', function(req, res){
		Router.run(routes, '/home', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});

	app.get('/aboutus', function(req, res){
		Router.run(routes, '/aboutus', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});

	app.get('/ourofferings', function(req, res){
		Router.run(routes, '/ourofferings', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});

	app.get('/rnd', function(req, res){
		Router.run(routes, '/rnd', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});

	app.get('/contactus', function(req, res){
		Router.run(routes, '/contactus', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});

	app.get('/jobseekers', function(req, res){
		Router.run(routes, '/jobseekers', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});

	app.get('/clients', function(req, res){
		Router.run(routes, '/clients', function (Handler) {
			var reactHtml = React.renderToString(React.createElement(Handler));
			res.render('index.ejs', {reactOutput: reactHtml});
		});
	});		
};