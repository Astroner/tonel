import React from 'react';
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import ReactJson from 'react-json-view'

import { combineHOC } from '../../_helpers/'

class Response extends React.Component{
	/*constructor(props){
		super(props);
	}*/
	render(){
		const { classes, $store: { loaded, error, data} } = this.props;
		return(
			<div className = {classes.root}>
				{!loaded && <div className = {classes.loading}>
					LOADING...
				</div>}
				{loaded && !error && <div className = {classes.data}>
					<ReactJson onEdit={console.log} src = {data.json}/>
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

Response = combineHOC(
	connect(({ urlSettings: { response } }) => ({ $store: response})),
	withStyles(styles)
)(Response)

export { Response as default }