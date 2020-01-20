import { combineReducers } from 'redux'

import general from './general.js'
import response from './response.js'

export default combineReducers({ general, response })