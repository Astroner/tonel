import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export class HeaderMenu extends React.Component{
	/*constructor(props){
		super(props);
	}*/
	render(){
		return(
			<div className = "header_menu">
				{this.props.routes.map((item, i) => (
					<Button 
						variant={item.path===this.props.active ? "contained" : "default"} 
						to={item.path} 
						component={Link} 
						style={{ marginLeft: 14 }}
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