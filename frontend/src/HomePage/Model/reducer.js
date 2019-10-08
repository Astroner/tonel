import Const from './constants.js'

export const HomePage_ = (state = {}, action)=>{
	switch (action.type) {
		case Const.URL_LIST_SUCCESS: return {
			loaded: true,
			state: action.payload
		}
		case Const.URL_LIST_FAILURE: return {
			loaded: true,
			error: action.error
		}
		case Const.DISABLE_URL_SECCESS: 
			const newState = [...state.state];
			newState[action.index] = {
				...newState[action.index],
				disabled: true
			}
			return {
				...state,
				state: newState
			}
		case Const.ENABLE_URL_SECCESS: 
			const newState1 = [...state.state];
			newState1[action.index] = {
				...newState1[action.index],
				disabled: false
			}
			return {
				...state,
				state: newState1
			}
		default: return state
	}
}