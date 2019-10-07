const { gets } = require('./gets/index.js')
const { posts } = require('./posts/index.js')

exports.api = (req, res) => {
	switch (req.method) {
		case "GET": return gets(req.url, req.query, req.params, res);
		case "POST": return posts(req.url, req.query, req.params, req.body, res);
		default: return res.status(400).send(JSON.stringify({ detail: "Unknown method" }))
	}
}