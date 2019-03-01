import React, { Component } from 'react';

import FormGroup from '@material-ui/core/FormGroup';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Field, reduxForm } from 'redux-form';

/* eslint-disable */
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from 'material-ui-pickers';

import { checklistData } from '../../assets/checklistData';
import CompanyName from '../components/form/CompanyName';
import submitCompanyForm from '../store/actions/submitCompanyForm';

const validate = values => {
  const errors = {}
  const requiredFields = [
    'companyName'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors;
}
class CompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      selectedDate: new Date(),
      score: 0
    };
    
    // Bindings
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  
  handleNameChange = event => {
    this.setState({ companyName: event.target.value });
  };
  
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  
  handleCheckboxChange = val => {
    let scoreCount = this.state.score;
    val.target.checked ? scoreCount++ : scoreCount--;
    this.setState({ score: scoreCount });
	};
	
	//this is the function that's using BE endpoint, only getting the data
	//makesure your backend project is running
	handleFormSubmit = e => {
    e.preventDefault();
		fetch("companies")
    .then(res => console.log(res))
	}
  
  render() {
    const { handleSubmit, pristine, reset, submitting, classes } = this.props
    const { selectedDate } = this.state;

    return (
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Field 
          name="companyName"
          component={CompanyName}
          label="First Name"/>
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
        <FormControl margin="normal" style={{ display: 'block' }}>

          <FormLabel component="legend">Company Checklist</FormLabel>
          <FormGroup>
            {checklistData.map((value, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox value={index.toString()} onChange={this.handleCheckboxChange} />}
                label={value}
              />
            ))}
          </FormGroup>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(submitCompanyForm(values));
};

const CompanyReduxForm = reduxForm({
  form: 'CompanyForm', // a unique identifier for this form
  validate,
  onSubmit
})(CompanyForm)

export default CompanyReduxForm;