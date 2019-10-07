import { _HomePage } from './HomePage/'
import { _HeaderMenu } from './HeaderMenu/'
import { _EmptyPage } from './EmptyPage/'

export default {
	"*": {
		fontFamily: "'Nunito', sans-serif"
	},
	body: {
		$m: 0,
		$p: 0
	},
	".home_page": _HomePage,
	".header_menu": _HeaderMenu,
	".empty_page": _EmptyPage
}