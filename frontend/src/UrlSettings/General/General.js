import React from 'react';
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'

import { combineHOC } from '../../_helpers/'

class General extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const { classes, $store: { loaded, error, data} } = this.props;
		return(
			<div className = {classes.root}>
				{!loaded && <div className = {classes.loading}>
					LOADING...
				</div>}
				{loaded && !error && <div className = {classes.data}>
					DATA!
				</div>}
				{error && <div className = {classes.error}>
					ERROR!
				</div>}
			</div>
		)
	}
}

const styles = theme => ({

})

General = combineHOC(
	connect(({ urlSettings: { general } }) => ({ $store: general})),
	withStyles(styles)
)(General)

export { General as default }