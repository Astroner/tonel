const https = require('https');
const axios = require("axios")

exports.request = ({ path, method, body, success, error, headers })=>{
	/*const options = {
		hostname: 'api.dev.yoloco.ru',
		path,
		method,
		port: 443,
		headers: {
			'Content-Type': 'application/json'
		}
	}*/
	const AXIOS = {
		baseURL: `https://api.yolotech.ru/`,
		url: path,
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		data: body
	}
	if (headers.authorization!==undefined) {
		AXIOS.headers.authorization = headers.authorization
	}
	axios.request(AXIOS)
		.then(_resp => success(_resp.status, _resp))
		.catch(_err => error(_err.response ? _err.response.status : 404, _err))

	/*let httpReq = https.request(options, yolo=>{
		let data = "";
		yolo.on('data', chunk=>{
			data+=chunk;
		})
		yolo.on('end', e=>{
			success(yolo.statusCode, data)
		})
	})
	httpReq.on("error", (err) => {
		error(err)
	});
	if (Object.keys(body).length) {
		httpReq.write(JSON.stringify(body));
	}
	httpReq.end();*/
}