'use strict';

/**
 * Module dependencies.
 */
var Job = require('../models/job');

/**
 * List of Jobs
 */
exports.list = function(req, res) {
  Job.find().exec(function(err, jobs) {
    if (err){
   				res.send(err)
    } else{
 				res.json(jobs);
   	}
  });
}
