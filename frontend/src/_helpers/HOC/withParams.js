import React from 'react';

export const withParams = selector => Component => props => {
	let search = selector && typeof(selector) === 'function' ? selector(props) : window.location.search;
	if (search[0] === "?") search = search.slice(1);
	const params = Object.fromEntries(search.split("&").map(cas => {
		const index = cas.search("=");

		return [cas.substr(0, index), cas.slice(index + 1)]
	}))
	return (
		<Component {...props} params = {params}/>
	)
}