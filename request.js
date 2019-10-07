const https = require('https');

exports.request = ({ path, method, body, success, error, headers })=>{
	const options = {
		hostname: 'api.dev.yoloco.ru',
		path,
		method,
		port: 443,
		headers: {
			'Content-Type': 'application/json'
		}
	}
	if (headers.authorization!==undefined) {
		options.headers.authorization = headers.authorization
	}
	if (Object.keys(body).length) {
		options.headers['Content-Length'] =JSON.stringify(body).length;
	}
	let httpReq = https.request(options, yolo=>{
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
	httpReq.end();
}