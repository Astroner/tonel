import React from 'react';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ methods }) => ({
	root: {
		background: "#fff",
		boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
		borderRadius: 10,
		padding: 10,
		display: 'flex',
		marginBottom: 10,
		"& span": {
			color: "#BFBFBF"
		}
	},
	method: ({ method }) => ({
		width: 100,
		display: 'flex',
		alignItems: 'center',
		padding: 10,
		margin: "-10px 10px -10px -10px",
		borderRadius: "10px 0 0 10px",
		background: methods[method ? method : "default"],
		border: !method ? "1px solid #2a2a31" : undefined
	}),
}))

const Address = ({ url, method }) => {
	const classes = useStyles({ method });
	const disableFirst = url[0] === "/";
	const disableLast = url[url.length - 1] === "/" || url.indexOf("?") !== -1;
	return (
		<div className = {classes.root}>
			<div className = {classes["method"]} >
				{method || "METH"}
			</div>
			<div>
				{url ? `${disableFirst ? "" : "/"}${url}${disableLast ? "" : "/"}` : 
				<span>/basePath/</span>}
			</div>
		</div>
	)
}

export { Address }