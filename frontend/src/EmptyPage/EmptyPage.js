import React from 'react';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export const EmptyPage = props => {
	const classes = useStyles();
	return (
		<div className = {classes.root} >
			<h1>Error 404</h1>
		</div>
	)
}