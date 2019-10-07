exports.posts = (url, query, urlParams, body, response) => {
	switch (url) {
		case "/add-new-url/":
			return response.status(200).send(JSON.stringify({ detail: "Successfully!" }))
		default:
			return response.status(404).send(JSON.stringify({ detail: 'Can not post information' }))
	}
}