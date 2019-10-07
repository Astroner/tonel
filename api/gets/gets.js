exports.gets = (url, query, urlParams, response) => {
	switch (url) {
		case "/proxy-api/get_json/":
			response.status(200).send(JSON.stringify({ root: true }))
			break;
		default:
			response.status(404).send(JSON.stringify({ detail: 'Can not get information' }))
			break;
	}
}