import React from 'react';
import { connect } from 'react-redux'
import { IconButton, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import ErrorOutline from '@material-ui/icons/ErrorOutline'
import SettingsApplications from '@material-ui/icons/SettingsApplications'

import { actions } from './Model/'

const style = ({ methods }) => ({
	root: {
		background: "#fff",
		boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		display: 'flex',
		justifyContent: 'space-between',
		opacity: ({ disabled }) => disabled ? .4 : 1,
		transition: "opacity .3s"
	},
	url: {
		margin: "-10px 0 -10px -10px",
		borderRadius: "10px 0 0 10px",
		overflow: "hidden",
		display: "flex"
	},
	method: {
		width: "100px",
		display: "flex",
		alignItems: 'center',
		padding: 10,
		marginRight: "10px",
		background: ({ method }) => methods[method] ? methods[method] : methods["default"]
	},
	path: {
		padding: "10px 0"
	}
})

let UrlItem = ({ classes, ...props}) => (
	<div className = {classes.root} >
		<div className = {classes.url}>
			<div 
				className={classes["method"]}
			>
				{props.method}
			</div>
			<div className = {classes["path"]}>
				{props.url}
			</div>
		</div>
		<div>
			<IconButton 
				onClick = {!props.disabled ? 
					e=>props.dispatch(actions.disableUrl(props.url, props.index)) : 
					e=>props.dispatch(actions.enableUrl(props.url, props.index))
				}
				size="small" 
			>
				<ErrorOutline 
					fontSize = "small"
					style = {{
						color: props.disabled ? "#E83737" : undefined
					}}
				/>
			</IconButton>
			<IconButton 
				size="small"
				component = {Link}
				to = {`/url_settings/?method=${props.method}&url=${props.url}`} 
			>
				<SettingsApplications 
					fontSize = "small"
					style = {{
						color: props.disabled ? "#E83737" : undefined
					}}
				/>
			</IconButton>
		</div>
	</div>
)

UrlItem = withStyles(style)(connect()(UrlItem))

export { UrlItem }