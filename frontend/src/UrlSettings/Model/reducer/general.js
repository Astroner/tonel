import { 
	URL_SETTINGS_GENERAL_SUCCESS, 
	URL_SETTINGS_GENERAL_FAILURE,
	URL_SETTINGS_CLEAR
} from '../constants.js'

const defaultState = {
	loaded: false,
	data: null,
	error: null
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case URL_SETTINGS_GENERAL_SUCCESS: 
			return {
				...state,
				loaded: true,
				data: {
					disabled: action.response.disabled,
					disableCode: action.response.disableCode
				},
				startData: {
					disabled: action.response.disabled,
					disableCode: action.response.disableCode
				}
			}
		case URL_SETTINGS_GENERAL_FAILURE:
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