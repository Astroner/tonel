import service from '../service.js'
import { 
	URL_SETTINGS_GENERAL_SUCCESS,
	URL_SETTINGS_GENERAL_FAILURE
} from '../constants.js'

export default {
	load: (url, method) => dispatch => {
		service.getGeneral(url, method)
			.then(response => {
				dispatch({ type: URL_SETTINGS_GENERAL_SUCCESS, response })
			})
			.catch(error => {
				dispatch({ type: URL_SETTINGS_GENERAL_FAILURE, error })
			})
	}
}