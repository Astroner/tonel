import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export class HeaderMenu extends React.Component {
	render(){
		return(
			<div className = "header_menu">
				{this.props.routes.map((item, i) => (
					<Button 
						variant={item.path===window.location.pathname ||
								 item.path + "/"===window.location.pathname ? "contained" : "text"} 
						to={item.path} 
						component={Link} 
						style={{ marginLeft: 14 }}
						onClick = {e=>this.forceUpdate()}
						key = {i}
					>
						{item.label}
					</Button>
				))}
			</div>
		)
	}
}

export const _HeaderMenu = {
	$g: "#2A2A2A",
	$p: 15
}