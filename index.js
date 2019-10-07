const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const path = require('path');

const { handler } = require('./requestHandlers/index.js');
const { api } = require('./api/index.js')
require('./dbAgent/index.js')

const app = express();

app.use(bp.json());
app.use(cors())
app.use('/static', express.static('./frontend/build/static'))

app.all('*', (req, res)=>{
	if (req.url.search(/\/proxy-control/)!==-1) {
		res.sendFile(path.resolve(__dirname, './frontend/build/index.html'))
		return
	}
	if (req.url.search(/\/proxy-api/)!==-1) {
		api(req, res)
		return
	}
	handler(req, res)
})

app.listen(8000, e=>{console.log("started...")})