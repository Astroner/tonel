import { APIService } from '../../_helpers/'

const serv = new APIService({
	baseURL: "http://127.0.0.1:8000/proxy-api",
	methods: {
		get_test: () => ({
			method: "GET",
			url: "/get_json/"
		})
	}
})

export { serv as default }