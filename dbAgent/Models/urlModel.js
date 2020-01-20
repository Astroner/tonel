const mg = require('mongoose');

const urlSchema = new mg.Schema({
	url: { type: String, required: true },
	method: { type: String, required: true },
	disabled: { type: Boolean, default: false },
	disableCode: { type: Number, default: null },
	date: { type: Date, default: Date.now }
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

exports.url = url;