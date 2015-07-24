'use strict';

var exec = require('child_process').exec;
var fs = require('fs');
var util = require('util');

var thumb = function(options, callback) {
	var err;
	var options = options ? options : {};
	var validCallback = typeof callback === 'function';

	var callCallback = function (err, data) {
		if (validCallback) {
			callback(err, data);
		} else {
			throw err;
		}
	};

	var validFile = options.file && typeof options.file === 'string';
	if (!validFile) {
		err = new Error('options.file is required');
		callCallback(err);
	} else if (!fs.existsSync(options.file)) {
		err = new Error('file not found');
		callCallback(err);
	} else {
		var script = 'ffmpeg -i %s -ss %s -r 1 -an -vframes %s -f mjpeg %s -y';
		script = util.format(script, options.file, options.duration, options.frames, options.output);
		exec(script, function(err, data){
			callback(err, data)
		});
		
	}

};

module.exports = thumb;