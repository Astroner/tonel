import React from 'react';
import { connect } from 'react-redux'

import { actions } from './Model/'

export class HomePage extends React.Component{
	/*constructor(props){
		super(props);
	}*/
	componentDidMount(){
		this.props.dispatch(actions.test())	
	}
	render(){
		const { store } = this.props;
		return(
			<div className="home_page">
				{!store.loaded && <div>LOADING...</div>}
				{store.loaded && store.state ? <div>
					SUCCESS
				</div> : null}
				{store.loaded && store.error ? <div>
					ERROR
				</div> : null}
			</div>
		)
	}
}

export const _HomePage = {

}

HomePage = connect(
	({ homePage }) => ({ store: homePage })
)(HomePage);