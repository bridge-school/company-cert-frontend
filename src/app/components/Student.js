import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';

import StudentName from './form/NameField';
import InterviewDate from './form/InterviewDate';
import validate from '../validations';
import submitStudentForm from '../store/actions/submitStudentForm';

const Student = props => {
  const { handleSubmit, pristine, submitting, invalid } = props;

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <div style={{ padding: 50 }}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h1>Student Info</h1>
            <Field name="studentName" component={StudentName} type="text" label="Full Name" />
            <Field
              name="interviewDate"
              component={InterviewDate}
              id="student-interview-date"
              label="Interview Date"
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
        </div>
      </Grid>
    </Grid>
  );
};

const onSubmit = (values, dispatch) => {
  dispatch(submitStudentForm(values));
};

export default reduxForm({
  form: 'StudentForm', // a unique name for the form
  validate,
  onSubmit,
  initialValues: {
    interviewDate: new Date()
  }
})(Student);
