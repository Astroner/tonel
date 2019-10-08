import service from './service.js'
import Const from './constants.js'

export const actions = {
	getUrls: method => dispatch => {
		service.getUrls(method)
			.then(
				payload=>dispatch({ type: Const.URL_LIST_SUCCESS, payload }),
				error=>dispatch({ type: Const.URL_LIST_FAILURE, error })
			)
	},
	disableUrl: (url, index) => dispatch => {
		service.disableUrl(url)
			.then(succ => dispatch({ type: Const.DISABLE_URL_SECCESS, url, index }))
			.catch(err => dispatch({ type: Const.DISABLE_URL_FAILURE, err }))
	},
	enableUrl: (url, index) => dispatch => {
		service.enableUrl(url)
			.then(succ => dispatch({ type: Const.ENABLE_URL_SECCESS, url, index }))
			.catch(err => dispatch({ type: Const.ENABLE_URL_FAILURE, err }))
	},
}