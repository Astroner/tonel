import { combineReducers } from 'redux';

import { HomePage_ } from '../HomePage/'
import urlSettings from '../UrlSettings/Model/reducer/'

export const Reducers = combineReducers({
	homePage: HomePage_,
	urlSettings
})