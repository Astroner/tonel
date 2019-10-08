const { Models } = require('../../dbAgent/Models/index.js')

module.exports = function GetUrls(response, query) {
	Models.url.find(query.method ? { method: query.method } : null,(err, urls) => {
		if (err) {
			return response.sendStatus(404)
		}
		return response.send(JSON.stringify(urls.map((item) => ({ 
			url: item.url, 
			disabled: item.disabled,
			method: item.method
		}))))
	})
}