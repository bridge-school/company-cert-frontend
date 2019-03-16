import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import getStudentsData from '../store/actions/getStudentsData';
import StudentCard from './StudentCard';

class Students extends React.Component {
  componentDidMount() {
    const { getStudentsData } = this.props; // eslint-disable-line
    getStudentsData();
  }

  render() {
    const { students } = this.props;
    return (
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <h1>Students</h1>
        {students.map(student => (
          <StudentCard key={student.id} {...student} />
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ students: state.students.studentsData });

const mapDispatchToProps = dispatch => ({ getStudentsData: () => dispatch(getStudentsData()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
