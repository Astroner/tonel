import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { history } from '../_helpers/'
import { HomePage } from '../HomePage/'
import { HeaderMenu } from '../HeaderMenu/'
import { EmptyPage } from '../EmptyPage/'
import { NewUrl } from '../NewUrl/'
import UrlSettings from '../UrlSettings/UrlSettings.js'

const theme = createMuiTheme({
	methods: {
		DELETE: "#EA3E3E",
		POST: "#313DE0",
		GET: "#26DF2F",
		PUT: "#DFDD2C",
		default: "#A09D9D"
	}
});

export class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			routes: [
				{ label: "Home", path: "/proxy-control", component: HomePage, exact: true },
				{ label: "New Url", path: "/newurl", component: NewUrl, ignored: true },
				{ label: "Url Settings", path: "/url_settings", component: UrlSettings, ignored: true, exact: true}
			]
		}
	}
	render(){
		return(
			<MuiThemeProvider theme={theme}>
				<Router history={history}>
					<HeaderMenu routes = {this.state.routes}/>
					<Switch>
						{this.state.routes.map((item, i) => (
							<Route key={i} {...item}/>
						))}
						<Route component = {EmptyPage}/>
					</Switch>
				</Router>
			</MuiThemeProvider>
		)
	}
}