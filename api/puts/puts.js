const { disableURL, enableURL} = require('./disableURL.js')

exports.puts = (url, query, urlParams, body, response) => {
	switch (url) {
		case "/proxy-api/disable_url/":
			return disableURL(body, response);
		case "/proxy-api/enable_url/":
			return enableURL(body, response);
		default:
			response.status(404).send(JSON.stringify({ detail: 'Can not put information' }))
			break;
	}
}