import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, makeStyles  } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		background: "#2A2A2A",
		padding: 15
	}
})

export const HeaderMenu = props => {

	const [e, setE] = useState(0)
	const classes = useStyles();
	const forceUpdate = () => {
		setE(e+1)
	}
	return(
		<div className = {classes.root}>
			{props.routes.map((item, i) => !item.ignored ? (
				<Button 
					variant={item.path===window.location.pathname ||
							 item.path + "/"===window.location.pathname ? "contained" : "text"} 
					to={item.path} 
					component={Link} 
					style={{ marginLeft: 14 }}
					onClick = {forceUpdate}
					key = {i}
				>
					{item.label}
				</Button>
			) : null)}
		</div>
	)
}