const https = require('https');

exports.request = ({ path, method, body, success, error, headers })=>{
	const options = {
		hostname: 'api.dev.yoloco.ru',
		path,
		method,
		port: 443,
		headers: {
			'Content-Type': 'application/json',
			authorization: headers.authorization,
			'Content-Length': body ? JSON.stringify(body).length : undefined
		}
	}
	let httpReq = https.request(options, yolo=>{
		let data = "";
		yolo.on('data', chunk=>{
			data+=chunk;
		})
		yolo.on('end', e=>{
			success(data)
		})
	})
	httpReq.on("error", (err) => {
		error(err)
	});
	if (body) {
		httpReq.write(JSON.stringify(body));
	}
	httpReq.end();
}