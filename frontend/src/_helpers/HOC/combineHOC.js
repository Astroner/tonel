import React from 'react';

export const combineHOC = (...HOCs) => Component => {

	const Render = HOCs.reduce((prev, HOC) => HOC(prev), Component);
	return (props) => <Render {...props}/>
}