const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const { request } = require('./request.js');

const app = express();

app.use(bp.json());
app.use(cors())

app.all('*', (req, res)=>{
	request({
		path: req.url,
		method: req.method,
		body: req.body,
		headers: req.headers,
		success: data=>res.send(data),
		error: e=>{
			res.send(JSON.stringify(e))
		}
	})
})

app.listen(8000, e=>{console.log("started...")})