const mg = require('mongoose');

const urlSchema = new mg.Schema({
	url: String,
	disabled: Boolean,
	disableCode: Number,
	mustBeSaved: Boolean,
	lastResponse: String
})

urlSchema.methods.disable = function disable(code) {
	this.disabled = true;
	this.disableCode = code ? code : 400;
}
urlSchema.methods.enable = function enable() {
	this.disabled = false;
	this.disableCode = undefined;
}

const url = mg.model("url", urlSchema);

module.exports.url = url;