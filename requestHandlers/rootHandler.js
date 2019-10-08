const { request } = require('../request.js')
const { Models } = require('../dbAgent/Models/index.js')

exports.handler = (req, res) => {
	request({
		path: req.url,
		method: req.method,
		body: req.body,
		headers: req.headers,
		success: (status, data)=>successHandler(status, data, req, res),
		error: (status, e)=>{
			res.status(status).send(JSON.stringify(e))
		}
	})
}

function successHandler(status, data, req, res) {
	Models.url.find({ url: req.url, method: req.method, disabled: true }, (err, urls) => {
		if (err) return res.status(status).send(data);
		if (!urls.length) return res.status(status).send(data);
		res.sendStatus(urls[0].disableCode);
	})


	Models.url.find({ url: req.url, method: req.method }, (err, urls) => {
		if (err) return err;
		if (!urls.length) {
			new Models.url({ url: req.url, method: req.method }).save((err)=>{
				if (err) console.error("Failed to save new url")
			})
		}
	})
}