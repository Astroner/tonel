const getUrls = require('./getUrls.js')
const getResponse = require("./getResponse.js")
const getGeneral = require("./getGeneral.js")

exports.gets = (url, query, urlParams, response) => {
	switch (url) {
		case "/proxy-api/get_saved_urls/":
			return getUrls(response, query);
		case "/proxy-api/response/":
			return getResponse(response, query)
		case "/proxy-api/general/": 
			return getGeneral(response, query)
		default:
			response.status(404).send(JSON.stringify({ detail: 'Can not get information' }))
			break;
	}
}