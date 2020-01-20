import general from './general.js'
import response from './response.js'
import { URL_SETTINGS_CLEAR } from '../constants.js'

export default { 
	general, 
	response,
	load: (url, method) => dispatch => {
		dispatch(general.load(url, method));
		dispatch(response.load(url, method));
	},
	clear: () => ({ type: URL_SETTINGS_CLEAR })
}