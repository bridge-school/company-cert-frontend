import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetAction } from '../store/actions/submitStudentForm';

const Student = ({ postSuccess, studentId, reset }) => {
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <StudentForm />
        {postSuccess && <Redirect to={`/students/${studentId}`} />}
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = {
  reset: resetAction
};

const mapStateToProps = ({ student: { postSuccess, studentId } }) => {
  return {
    postSuccess,
    studentId
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
