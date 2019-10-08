import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { history } from '../_helpers/'
import { HomePage } from '../HomePage/'
import { HeaderMenu } from '../HeaderMenu/'
import { EmptyPage } from '../EmptyPage/'
import { NewUrl } from '../NewUrl/'

const theme = createMuiTheme({});

export class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			routes: [
				{ label: "Home", path: "/proxy-control", component: HomePage, exact: true },
				{ label: "New Url", path: "/newurl", component: NewUrl, ignored: true }
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