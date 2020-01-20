const { Models } = require('../../dbAgent/Models/index.js');

module.exports = function getResponse(response, { url, method }) {
	if (!url && !method) return response.status(400).send({
		details: "url and method required."
	})
	Models.response.findOne({ url, method }, (err, url) => {
		if (err) {
			return response.sendStatus(500)
		}
		if (!url) return response.status(404).send({
			details: "Here is no such response"
		});

		return response.send(url)
	})
}