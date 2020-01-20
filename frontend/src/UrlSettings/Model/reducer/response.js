import { 
	URL_SETTINGS_RESPONSE_SUCCESS,
	URL_SETTINGS_RESPONSE_FAILURE,
	URL_SETTINGS_CLEAR
} from '../constants.js'

const defaultState = {
	loaded: false,
	data: null,
	error: null
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case URL_SETTINGS_RESPONSE_SUCCESS: 
			return {
				...state,
				loaded: true,
				data: {
					response: action.response.response,
					json: action.response.json
				},
				startData: {
					response: action.response.response,
					json: action.response.json
				}
			}
		case URL_SETTINGS_RESPONSE_FAILURE:
			return {
				...state,
				loaded: true,
				error: true
			}
		case URL_SETTINGS_CLEAR:
			return defaultState
		default: return state
	}
}