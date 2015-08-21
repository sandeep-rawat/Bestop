'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
	title : {type : String, default: ''},
	location : {type : String, default: ''},
	name : {type : String, default: ''}
},{
	strict: false,
	collection:'jobs'
});

module.exports = mongoose.model('Job', JobSchema);
