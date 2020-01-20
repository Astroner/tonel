import React from 'react';
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'

import { withParams, combineHOC } from '../_helpers/'
import { Address } from '../_components/'
import actions from './Model/actions/'
import General from './General/General.js'
import Response from './Response/Response.js'

class UrlSettings extends React.Component{
	componentDidMount(){
		const { url, method } = this.props.params;
		this.props.dispatch(actions.load( url, method ))
	}
	componentWillUnmount(){
		this.props.dispatch(actions.clear())
	}
	render(){
		const { classes, params } = this.props;
		return(
			<div className = {classes.root}>
				<Address {...params} />
				<General />
				<Response />
			</div>
		)
	}
}

const styles = theme => ({
	root: {
		padding: "20px 40px"
	}
})

UrlSettings = combineHOC(
	withStyles(styles),
	withParams(props => props.location.search),
	connect()
)(UrlSettings)

export { UrlSettings as default }