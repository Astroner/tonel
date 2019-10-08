import React from 'react';
import { connect } from 'react-redux'
import { 
	Input,
	FormControl,
	InputLabel,
	Button
} from '@material-ui/core'

import methColors from '../methColors.js'

class NewUrl extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			resultier: "",
			method: { value: "", error: false},
			baseURL: { value: "", error: false}
		}
	}
	handleSubmit = e => {
		e.preventDefault();
		if (!this.state.method.value) {
			return this.setState({ method: {...this.state.method, error: true} })
		}
		if (!this.state.baseURL.value) {
			return this.setState({ baseURL: {...this.state.baseURL, error: true} })
		}
	}
	handleChange(name, value){
		this.setState(prev => ({
			...prev,
			[name]: {
				value,
				error: false
			}
		}))
	}
	render(){
		return (
			<div className = "new_url" >
				<h2>New route creating</h2>
				<div className="resultier">
					<div 
						className="method"
						style = {{
							border: !this.state.method.value ? "1px solid #2a2a31": undefined,
							background: this.state.method.value ? methColors(this.state.method.value.toUpperCase()) : undefined
						}}
					>
						{this.state.method.value || "METH"}
					</div>
					<div className="url">
						{this.state.baseURL.value ? `/${this.state.baseURL.value}/` : 
						<span style ={{ color: "#BFBFBF" }} >/basePath/</span>}
					</div>
				</div>
				<div className="forms">
					<div className="mains">
						<FormControl style = {{ marginRight: 10 }} >
							<InputLabel>Method</InputLabel>
							<Input 
								error = {this.state.method.error}
								value = {this.state.method.value} 
								onChange = {e=>this.handleChange('method', e.target.value.toUpperCase())}
							/>
						</FormControl>
						<FormControl>
							<InputLabel>Base url</InputLabel>
							<Input 
								error = {this.state.baseURL.error}
								value = {this.state.baseURL.value} 
								onChange = {e=>this.handleChange("baseURL", e.target.value)}
							/>
						</FormControl>
					</div>
				</div>
				<Button onClick = {this.handleSubmit} variant = "contained" color = "primary" >Create</Button>
			</div>
		)
	}
}

export const _NewUrl = {
	$p: 10,
	h2: {
		$sc: "30, #2a2a31"
	},
	".resultier": {
		$g: "#fff",
		boxShadow: "0 4 10 rgba(0,0,0,0.3)",
		$r: 10,
		$p: 10,
		"$d-fm/b": "10px",
		'.method': {
			$w: "100px",
			"$d-fa-c": "A",
			$p: 10,
			$m: "-10 10 -10 -10",
			$r: "10 0 0 10"
		}
	},
	".forms": {
		"$m/b": "20px"
	}
}

NewUrl = connect()(NewUrl);

export { NewUrl }