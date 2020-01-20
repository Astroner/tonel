const mg = require("mongoose");

const responseSchema = new mg.Schema({
	url: { type: String, required: true },
	method: { type: String, required: true },
	response: { type: String, required: true },
	json: { type: Object, default: null }
})

const response = mg.model("response", responseSchema)

exports.response = response;