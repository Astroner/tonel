const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const path = require('path');

const options = require("minimist")(process.argv.slice(2));

const { handler } = require('./requestHandlers/index.js');
const { api } = require('./api/index.js')
require('./dbAgent/index.js')

const PORT = options.p || 8000;
const HOST = options.h || "localhost";
const app = express();

app.use(bp.json());
app.use(cors())
app.use('/static', express.static('./frontend/build/static'))

/*app.set('view engine', 'ejs');
app.set('views', './frontend/build/');*/

app.all('*', (req, res)=>{
	if (req.url.search(/\/proxy-control/)!==-1) {
		// res.render("index")
		res.sendFile(path.resolve(__dirname, './frontend/build/index.html'))
		return
	}
	if (req.url.search(/\/proxy-api/)!==-1) {
		api(req, res)
		return
	}
	handler(req, res)
})

app.listen(PORT, HOST, e=>{
	console.log(
`==============================================

	Deamon listening on port ${PORT}

	Go to ${HOST}:${PORT}/proxy-control/ for UI

===============================================

`)
})