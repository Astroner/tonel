const db = require('mongoose');

const { Models: { response } } = require('../Models/index.js');

exports.AddNewResponse = (obj) => new Promise((resolve, reject) => {
	new response(obj).save((err, uri) => {
		if (err) {
			return reject(err)
		};
		return resolve ? resolve(uri) : null;
	})
})