const { request } = require('../request.js')

exports.handler = (req, res) => {
	request({
		path: req.url,
		method: req.method,
		body: req.body,
		headers: req.headers,
		success: (status, data)=>res.status(status).send(data),
		error: (status, e)=>{
			res.status(status).send(JSON.stringify(e))
		}
	})
}