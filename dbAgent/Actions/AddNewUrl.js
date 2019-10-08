const db = require('mongoose');

const { Models } = require('../Models/index.js');

exports.AddNewUrl = function AddNewUrl(body, success, failure) {
	new Models.url({ url: body.url }).save((err, uri) => {
		if (err) {
			return failure(err)
		};
		return success(uri);
	})
}