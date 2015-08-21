'use strict';

/**
 * Module dependencies.
 */
var job = require('../controllers/job');

module.exports = function(app) {
	app.route('/api/jobs')
		.get(job.list)
};
