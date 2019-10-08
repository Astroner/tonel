const { Models } = require('../../dbAgent/Models/');

exports.disableURL = function disableURL(body, res) {
	if (!body.url) return res.sendStatus(404)
	Models.url.updateOne({ url: body.url }, { disabled: true, disableCode: 400 }, (err, ok) => {
		if (err) return res.sendStatus(404)
		res.send({ detail: "success" });
	})
}

exports.enableURL = function enableURL(body, res) {
	if (!body.url) return res.sendStatus(404)
	Models.url.updateOne({ url: body.url }, { disabled: false, disableCode: null }, (err, ok) => {
		if (err) return res.sendStatus(404)
		res.send(JSON.stringify({ detail: "success" }));
	})
}