import React from 'react';
import { connect } from 'react-redux'
import { IconButton } from '@material-ui/core'

import ErrorOutline from '@material-ui/icons/ErrorOutline'

import { actions } from './Model/'
import methColors from '../methColors.js'

let UrlItem = props => (
	<div 
		className="url_item"
		style = {{
			opacity: props.disabled ? .4 : 1
		}}
	>
		<div className="url">
			<div 
				className="method"
				style = {{
					background: methColors(props.method)
				}}
			>
				{props.method}
			</div>
			<div className="path">
				{props.url}
			</div>
		</div>
		<div className="actions">
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
		</div>
	</div>
)

export const _UrlItem = {
	$g: "#fff",
	boxShadow: "0 4 10 rgba(0,0,0,0.3)",
	$r: 10,
	$p: 10,
	opacity: ["initial", .3],
	"$m/b": "10px",
	"$d-fj-b": "A",
	".url": {
		$m: "-10 0 -10 -10",
		$r: "10 0 0 10",
		overflow: "hidden",
		$d: "flex",
		'.method': {
			$w: "100px",
			"$d-fa-c": "A",
			$p: 10,
			"$m/r": "10px"
		},
		".path": {
			$p: "10 0"
		}
	}
}
UrlItem = connect()(UrlItem)

export { UrlItem }