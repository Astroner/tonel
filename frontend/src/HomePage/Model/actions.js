import service from './service.js'

export const actions = {
	test: () => dispatch => {
		service.get_test()
			.then(
				payload=>dispatch({ type: "SET_TEST_SUCCESS", payload }),
				error=>dispatch({ type: "SET_TEST_FAILURE", error })
			)
	}
}