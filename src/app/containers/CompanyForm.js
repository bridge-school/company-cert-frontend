import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { Field, reduxForm } from 'redux-form';

import CompanyName from '../components/form/NameField';
import InterviewDate from '../components/form/InterviewDate';
import CompanyChecklistWrapper from '../components/form/CompanyChecklistWrapper';
import submitCompanyForm from '../store/actions/submitCompanyForm';
import validate from '../validations';
import Dropdown from '../components/form/Dropdown';
import Error from '../components/ErrorPage';

class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const { checklist, industry, tech, getFrontendFailure } = this.props;

    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Field name="companyName" component={CompanyName} label="Company Name" id="company-name" />

        <Field
          name="interviewDate"
          component={InterviewDate}
          id="company-interview-date"
          label="Interview Date"
        />

        {getFrontendFailure ? (
          <div style={{ margin: '30px 0' }}>
            <Error errorType="formList" />
          </div>
        ) : (
          <React.Fragment>
            <Field
              name="companyChecklist"
              component={CompanyChecklistWrapper}
              checklistData={checklist}
            />

            <Field
              name="industry"
              component={Dropdown}
              label="Industry"
              placeholder="Choose related industries"
              multi
              suggestions={industry.map(item => ({ label: item.name, value: item.id }))}
            />

            <Field
              name="tech"
              component={Dropdown}
              label="Technology"
              placeholder="Choose related technologies"
              multi
              suggestions={tech.map(item => ({ label: item.name, value: item.id }))}
            />
          </React.Fragment>
        )}
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

const mapStateToProps = ({ frontendData: { checklist, tech, industry, getFrontendFailure } }) => ({
  checklist,
  tech,
  industry,
  getFrontendFailure
});

CompanyForm = connect(mapStateToProps)(CompanyForm);

const CompanyReduxForm = reduxForm({
  form: 'CompanyForm', // a unique identifier for this form
  validate,
  onSubmit,
  initialValues: {
    interviewDate: new Date()
  }
})(CompanyForm);

export default CompanyReduxForm;
