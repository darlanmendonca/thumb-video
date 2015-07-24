assert = require('assert');
var thumb = require('./index.js');

describe('generate thumb', function() {
	it ('simple frame', function() {
		var options = {
			file: './tests/videos/iphone.mov',
			output: './tests/thumb.jpg',
			frames: 1,
			duration: '00:00:00'
		};

		thumb(options, function(err, data) {
			assert
				.equal(null, err);
			assert
				.equal(null, data);
		});
	});
})