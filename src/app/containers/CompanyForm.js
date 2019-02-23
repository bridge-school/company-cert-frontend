import React, { Component } from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class CompanyForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form noValidate autoComplete="off">
				<FormGroup>
					<TextField
						required
						id="company-name"
						label="Company Name"
						value=""
						margin="normal"
					/>
				</FormGroup>
				<FormGroup>
					<TextField
						required
						id="date"
						label="Interview Date"
						type="date"
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</FormGroup>

				<Button type="submit" variant="contained" color="primary">
				  Submit
				</Button>
			</form>
		);
	}
}