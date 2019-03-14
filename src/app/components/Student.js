import React from 'react';
import Grid from '@material-ui/core/Grid';

class Student extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Grid item xs={10} sm={8} md={6}>
        <h1>Student</h1>
      </Grid>
    );
  }
}

export default Student;
