import React from 'react';
import Grid from '@material-ui/core/Grid';

import StudentForm from './StudentForm';

const Student = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <StudentForm />
      </Grid>
    </Grid>
  );
};

export default Student;
