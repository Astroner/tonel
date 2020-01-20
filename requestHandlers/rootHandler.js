const { request } = require('../request.js');
const { Models } = require('../dbAgent/Models/index.js');
const { AddNewResponse } = require("../dbAgent/Actions/")

const example = require('../example.js')

exports.handler = (req, res) => {
	console.log(`# New Request: ${req.method}: ${req.url} `)
	/*if (req.url.search(new RegExp("/api/reports/details/"))!==-1) 
		return res.status(200).send(JSON.stringify(example))*/
	request({
		path: req.url,
		method: req.method,
		body: req.body,
		headers: req.headers,
		success: (status, data) => successHandler(status, data, req, res),
		error: (status, e) => errorHandler(status, e, req, res)
	})
}

function successHandler(status, response, req, res) {
	console.log(`### Success response: ${req.method}: ${req.url} `)
	Models.url.find({ url: req.url, method: req.method, disabled: true }, (err, urls) => {
		if (err) return res.status(status).send(response.data);
		if (!urls.length) return res.status(status).send(response.data);
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

	const isObject = typeof(response.data) === "object";

	AddNewResponse({ 
		url: req.url, 
		method: req.method, 
		response: isObject ? JSON.stringify(response.data) : response.data,
		json: isObject ? response.data : null
	})
		.then(e=>undefined)
		.catch(err => console.error(getError(req.url, req.method, err)))
}

function errorHandler(status, error, req, res) {
	console.error(`### FAILURE: ${req.method}: ${req.url} ${status}`)
	Models.response.findOne({ url: req.url, method: req.method }, (err, url) => {
		if (err) {
			res.status(status).send(error.response.data)
			return console.log("# Error: ", err)
		}
		if (!url) return res.status(status).send(error.response ? error.response.data : "404")
		console.log(`##### Sending placeholder: ${req.method}: ${req.url} `)
		res.send(url.json ? url.json : url.response)
	})
}

function getError(url, method, err) {
	return `# Failed to save response on ${method}: ${url}
=============
${err}
=============
`
}