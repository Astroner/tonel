import React from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { actions } from './Model/'
import { UrlItem, _UrlItem } from './UrlItem.js'

export class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			options: [
				"POST", "GET", "PUT", "DELETE"
			]
		}
	}
	componentDidMount(){
		this.props.dispatch(actions.getUrls())	
	}
	render(){
		const { store } = this.props;
		return(
			<div className="home_page">
				<div className="hat">
					<div className="buttons">
						<Button
							variant = "contained"
							style = {{ marginRight: 10 }}
							onClick = {e=>this.props.dispatch(actions.getUrls())}
						>
							All
						</Button>
						{this.state.options.map((item, i) => (
							<Button
								key = {i}
								variant = "contained"
								style = {{ marginRight: 10 }}
								onClick = {e=>this.props.dispatch(actions.getUrls(item))}
							>
								{item}
							</Button>
						))}
					</div>
					<Button
						variant = "outlined"
						color = "secondary"
						component = {Link}
						to = "/newurl"
					>
						New URL
					</Button>
				</div>
				{!store.loaded && <div>LOADING...</div>}
				{store.loaded && store.state ? 
				<div>
					{store.state.map((item, i)=>( 
						<UrlItem key = {i} {...item} index = {i}/>
					))}
				</div> : null}
				{store.loaded && store.error ? <div>
					ERROR
				</div> : null}
			</div>
		)
	}
}

export const _HomePage = {
	$p: 20,
	".url_item": _UrlItem,
	".hat": {
		"$d-fj-ba-cm/b": "10px",
		".buttons": {
			"$d-fa-c": "A"
		}
	}
}

HomePage = connect(
	({ homePage }) => ({ store: homePage })
)(HomePage);