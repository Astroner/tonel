const express = require('express');
const bp = require('body-parser');
const https = require('https');
const cors = require('cors');
const querystring = require('querystring');

const app = express();

app.use(bp.json());
app.use(cors())

app.all('*', (req, res)=>{
	const options = {
		hostname: 'api.dev.yoloco.ru',
		path: req.url,
		method: req.method,
		port: 443,
		headers: {
			'Content-Type': 'application/json',
			authorization: req.headers.authorization,
			'Content-Length': req.body ? JSON.stringify(req.body).length : undefined
		}
	}
	let httpReq = https.request(options, yolo=>{
		let data = "";
		yolo.on('data', chunk=>{
			data+=chunk;
		})
		yolo.on('end', e=>{
			res.send(data)
		})
	})
	httpReq.on("error", (err) => {
		res.send(JSON.stringify(err))
	});
	if (req.body) {
		httpReq.write(JSON.stringify(req.body));
	}
	httpReq.end();
	// res.send(JSON.stringify(req.headers))
})

app.listen(8000, e=>{console.log("started...")})