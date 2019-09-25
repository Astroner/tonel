import React from 'react';
import { Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { history } from '../_helpers/'
import { HomePage } from '../HomePage/'
import { HeaderMenu } from '../HeaderMenu/'

const theme = createMuiTheme({});

export class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			routes: [
				{ label: "Home", path: "/", component: HomePage }
			]
		}
	}
	render(){
		return(
			<MuiThemeProvider theme={theme}>
				<Router history={history}>
					<HeaderMenu active={history.location.pathname} routes={this.state.routes}/>
					{this.state.routes.map((item, i) => (
						<Route key={i} {...item}/>
					))}
				</Router>
			</MuiThemeProvider>
		)
	}
}