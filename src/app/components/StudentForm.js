import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';

import StudentName from './form/NameField';
import InterviewDate from './form/InterviewDate';
import Dropdown from './form/Dropdown';
import validate from '../validations';
import submitStudentForm from '../store/actions/submitStudentForm';

const Student = props => {
  const { industry, tech } = props;
  const { handleSubmit, pristine, submitting, invalid } = props;
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h1>Student Info</h1>
      <Field
        component={StudentName}
        name="studentName"
        type="text"
        label="Full Name"
        id="student-name"
      />
      <Field
        name="interviewDate"
        component={InterviewDate}
        id="student-interview-date"
        label="Interview Date"
      />
      <Field
        name="industry"
        component={Dropdown}
        label="Industries"
        multi
        suggestions={industry.map(item => ({ label: item.name, value: item.id }))}
      />
      <Field
        name="tech"
        component={Dropdown}
        label="Tech Stack"
        multi
        suggestions={tech.map(item => ({ label: item.name, value: item.id }))}
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
};

const onSubmit = (values, dispatch) => {
  dispatch(submitStudentForm(values));
};

const mapStateToProps = ({ frontendData: { tech, industry } }) => ({
  tech,
  industry
});

const studentReduxForm = reduxForm({
  form: 'StudentForm', // a unique name for the form
  validate,
  onSubmit,
  initialValues: {
    interviewDate: new Date()
  }
})(connect(mapStateToProps)(Student));

export default studentReduxForm;
