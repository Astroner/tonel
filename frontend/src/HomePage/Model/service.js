import { APIService } from '../../_helpers/'

const serv = new APIService({
	baseURL: "http://127.0.0.1:8000/proxy-api",
	methods: {
		getUrls: method => ({
			method: "GET",
			url: `/get_saved_urls/${method ? `?method=${method}` : ""}`
		}),
		disableUrl: (url) => ({
			method: "PUT",
			url: "/disable_url/",
			data: { url }
		}),
		enableUrl: url => ({
			method: "PUT",
			url: "/enable_url/",
			data: { url }
		})
	}
})

export { serv as default }