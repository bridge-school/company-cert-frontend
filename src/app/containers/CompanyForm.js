import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { Field, reduxForm } from 'redux-form';

import CompanyName from '../components/form/CompanyName';
import InterviewDate from '../components/form/InterviewDate';
import CompanyChecklistWrapper from '../components/form/CompanyChecklistWrapper';
import submitCompanyForm from '../store/actions/submitCompanyForm';
import validate from '../validations';

import Dropdown from '../components/form/Dropdown';

class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid, onBlur } = this.props;

    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Field name="companyName" component={CompanyName} label="Company Name" />

        <Field name="interviewDate" component={InterviewDate} label="Interview Date" />

        <Field
          name="companyChecklist"
          component={CompanyChecklistWrapper}
          checklistData={this.props.checklist}
        />
        
        <Field 
          name="Industry"
          component={Dropdown} 
          label="Industry" 
          placeholder="Choose your industry interests"
          multi
          suggestions={[{label: 'Test1', value: '1'}, {label: 'Test2', value: '2'}]}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={pristine || submitting || invalid}
        >
          Submit
        </Button>
      </form>
    );
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(submitCompanyForm(values));
};

const mapStateToProps = (state) => {
  return ({
    checklist: state.frontendData.checklist,
    tech: state.frontendData.tech,
    industry: state.frontendData.industry
  })
};

CompanyForm = connect(mapStateToProps)(CompanyForm);

const CompanyReduxForm = reduxForm({
  form: 'CompanyForm', // a unique identifier for this form
  validate,
  onSubmit,
  initialValues: {
    interviewDate: new Date()
  },
})(CompanyForm);

export default CompanyReduxForm;
