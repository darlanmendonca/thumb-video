assert = require('assert');
var thumb = require('./index.js');

describe('generate thumb', function() {
	it ('should generate frame at duration determined', function() {
		var options = {
			file: './tests/videos/iphone.mov',
			output: './tests/thumb.jpg',
			frames: 1,
			duration: '00:00:01'
		};

		thumb(options, function(err, data) {
			assert
				.equal(null, err);
			assert
				.equal(null, data);
		});
	});
})