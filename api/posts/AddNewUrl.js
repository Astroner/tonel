const { actions } = require('../../dbAgent/index.js')

module.exports = function AddNewUrl(body, response) {
	actions.AddNewUrl(body,
		()=>{
			return response.status(200).send(JSON.stringify({ detail: "success" }))
		},
		()=>{
			return response.status(400).send(JSON.stringify({ detail: "failure" }))
		}
	);
}

/*
	body = {
		url: String,
	}
*/