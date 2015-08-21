var mongoose = require('mongoose');

module.exports = mongoose.model('Ad', {
	name : {type : String, default: ''},
	url : {type : String, default: ''},
	folderId: String,
  dateCreated: Date
});
