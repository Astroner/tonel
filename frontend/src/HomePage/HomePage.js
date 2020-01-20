import React from 'react';
import { connect } from 'react-redux'
import { Button, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { actions } from './Model/'
import { UrlItem } from './UrlItem.js'

const style = theme => ({
	root: {
		padding: 20
	},
	hat: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10
	},
	buttons: {
		display: 'flex',
		alignItems: 'center'
	}
})

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
		const { store, classes } = this.props;
		return(
			<div className = {classes.root}>
				<div className = {classes["hat"]}>
					<div className = {classes["buttons"]}>
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

HomePage = connect(
	({ homePage }) => ({ store: homePage })
)(HomePage);

HomePage = withStyles(style)(HomePage)