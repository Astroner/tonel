import axios from 'axios'

class APIService{
	constructor(props){
		this.__axios = axios.create({
			baseURL: props.baseURL ? props.baseURL : window.location.origin + "/proxy-api",
            headers: {
            	"Content-Type": "application/json"
            }
		});
		Object.keys(props.methods).forEach((key) => {
			this[key] = (...args) => {
				const config = props.methods[key](...args);
				return this.__axios.request(config)
					.then(
						resp => {
							if (resp.data) {
								let result = resp.data;
								Object.defineProperty(result, "__status", {
									value: resp.status,
									enumerable: false
								})
								return result
							}
							return resp
						},
						err => {
							return Promise.reject(err)
						}
					)
			}
		})
	}
}

export { APIService }