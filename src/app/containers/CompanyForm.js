import React, { Component } from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';

/* eslint-disable */
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from 'material-ui-pickers';

export class CompanyForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			companyName: '',
			selectedDate: new Date(),
		};

		// Bindings
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
	}

	handleNameChange = event => {
		this.setState({ companyName: event.target.value })
	}

	handleDateChange = date => {
		this.setState({ selectedDate: date });
	};

	render() {
		const { selectedDate } = this.state;

		return (
			<form noValidate autoComplete="off">
				<FormGroup>
					<TextField
						required
						id="company-name"
						label="Company Name"
						value={this.state.companyName}
						margin="normal"
						onChange={this.handleNameChange}
					/>
				</FormGroup>
				<FormGroup>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker 
							required
							label="Interview Date"
							value={selectedDate} 
							onChange={this.handleDateChange}
							format="dd/MM/yyyy"
							margin="normal"
							keyboard
							keyboardIcon={<EventIcon />} 
						/>
					</MuiPickersUtilsProvider>
				</FormGroup>

				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
		);
	}
}