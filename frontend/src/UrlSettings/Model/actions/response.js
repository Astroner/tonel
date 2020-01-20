import service from '../service.js'
import {
	URL_SETTINGS_RESPONSE_SUCCESS,
	URL_SETTINGS_RESPONSE_FAILURE
} from '../constants.js'

export default {
	load: (url, method) => dispatch => {
		service.getResponse(url, method)
			.then(response => {
				dispatch({ type: URL_SETTINGS_RESPONSE_SUCCESS, response })
			})
			.catch(error => {
				dispatch({ type: URL_SETTINGS_RESPONSE_FAILURE, error })
			})
	}
}