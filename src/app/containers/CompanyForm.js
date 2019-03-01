import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';

import CompanyName from '../components/form/CompanyName';
import InterviewDate from '../components/form/InterviewDate';
import CompanyChecklistWrapper from '../components/form/CompanyChecklistWrapper';
import submitCompanyForm from '../store/actions/submitCompanyForm';
import checklistData from '../../assets/checklistData';

const validate = values => {
  const errors = {};
  const requiredFields = ['companyName', 'interviewDate'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};
class CompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Field name="companyName" component={CompanyName} label="First Name" />

        <Field name="interviewDate" component={InterviewDate} label="Interview Date" />

        <Field
          name="companyChecklist"
          component={CompanyChecklistWrapper}
          checklistData={checklistData}
        />

        <Button type="submit" variant="contained" color="primary" disabled={pristine || submitting || invalid}>
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
})(CompanyForm);

export default CompanyReduxForm;
