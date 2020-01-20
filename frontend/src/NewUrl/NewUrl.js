import React from 'react';
import { connect } from 'react-redux'
import { 
	Input,
	FormControl,
	InputLabel,
	Button,
	withStyles
} from '@material-ui/core'

import { combineHOC } from '../_helpers/'
import { Address } from '../_components/'

const style = theme => ({
	root: {
		padding: 10,
		"& h2": {
			fontSize: 30, 
			color: "#2a2a31"
		}
	},
	forms: {
		marginBottom: 20
	}
})

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
		const { classes } = this.props;
		return (
			<div className = {classes.root} >
				<h2>New route creating</h2>
				<Address method = {this.state.method.value} url = {this.state.baseURL.value}/>
				<div className = {classes["forms"]}>
					<div>
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

NewUrl = combineHOC(
	c => withStyles(style)(c),
	c => connect()(c)
)(NewUrl)

export { NewUrl }