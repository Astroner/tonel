import { APIService } from '../../_helpers/'

const serv = new APIService({
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