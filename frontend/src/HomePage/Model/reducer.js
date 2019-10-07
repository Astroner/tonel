export const HomePage_ = (state = {}, action)=>{
	switch (action.type) {
		case "SET_TEST_SUCCESS": return {
			loaded: true,
			state: action.payload
		}
		case "SET_TEST_FAILURE": return {
			loaded: true,
			error: action.error
		}
		default: return state
	}
}