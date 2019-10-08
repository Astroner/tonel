const AddNewUrl = require('./AddNewUrl.js')

exports.posts = (url, query, urlParams, body, response) => {
	switch (url) {
		case "/proxy-api/add-new-url/":
			return AddNewUrl(body, response)
		default:
			return response.status(404).send(JSON.stringify({ detail: 'Can not post information' }))
	}
}