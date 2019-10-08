const { gets } = require('./gets/index.js')
const { posts } = require('./posts/index.js')
const { puts } = require('./puts/index.js')

exports.api = (req, res) => {
	switch (req.method) {
		case "GET": return gets(req.path, req.query, req.params, res);
		case "POST": return posts(req.path, req.query, req.params, req.body, res);
		case "PUT": return puts(req.path, req.query, req.params, req.body, res);
		default: return res.status(400).send(JSON.stringify({ detail: "Unknown method" }))
	}
}