import { _HomePage } from './HomePage/'
import { _HeaderMenu } from './HeaderMenu/'

export default {
	"*": {
		fontFamily: "'Nunito', sans-serif"
	},
	body: {
		$m: 0,
		$p: 0
	},
	".home_page": _HomePage,
	".header_menu": _HeaderMenu
}