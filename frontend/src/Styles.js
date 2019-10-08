import { _HomePage } from './HomePage/'
import { _HeaderMenu } from './HeaderMenu/'
import { _EmptyPage } from './EmptyPage/'
import { _NewUrl } from './NewUrl/'

const Styles = {
	"*": {
		fontFamily: "'Nunito', sans-serif",
		boxSizing: 'border-box'
	},
	body: {
		$m: 0,
		$p: 0
	},
	".home_page": _HomePage,
	".header_menu": _HeaderMenu,
	".empty_page": _EmptyPage,
	".new_url": _NewUrl
}

export { Styles as default }