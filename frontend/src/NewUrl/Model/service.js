import { APIService } from '../../_helpers/'

export default new APIService({
	baseURL: "http://127.0.0.1:8000/proxy-api",
	methods: {
		addNewURL: (method, url) => ({
			method: "POST",
			url: "/addnewurl/",
			data: { method, url }
		})
	}
})