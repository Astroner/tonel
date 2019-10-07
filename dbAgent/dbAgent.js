const mongoose = require('mongoose');

const { Models } = require('./Models/index.js');

let ready = false;

mongoose.connect("mongodb://localhost/proxy_base", { 
	useNewUrlParser: true , 
	useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', e=>console.log('error'));

db.once('open', ()=>{
	ready = true;
	console.log("DB connected!")
})


