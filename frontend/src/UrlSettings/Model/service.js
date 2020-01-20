import { APIService } from '../../_helpers/'


export default new APIService({
	methods: {
		getResponse: (url, method) => ({
			url: "/response/",
			method: "GET",
			params: { url, method }
		}),
		getGeneral: (url, method) => ({
			url: "/general/",
			method: "GET",
			params: { url, method }
		})
	}
})