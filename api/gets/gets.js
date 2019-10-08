const getUrls = require('./getUrls.js')

exports.gets = (url, query, urlParams, response) => {
	switch (url) {
		case "/proxy-api/get_saved_urls/":
			return getUrls(response, query);
		default:
			response.status(404).send(JSON.stringify({ detail: 'Can not get information' }))
			break;
	}
}