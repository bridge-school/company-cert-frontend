import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import getStudentsData from '../store/actions/getStudentsData';
import Card from './Card';
import { Link } from 'react-router-dom';

class Students extends React.Component {
  componentDidMount() {
    const { getStudentsData } = this.props; // eslint-disable-line
    getStudentsData();
  }

  render() {
    const { students } = this.props;
    return (
      <Grid item xs={10} sm={8} md={6}>
        <h1>Students</h1>
        {students.map(student => (
          <Link to={`/students/${student.id}`} key={student.id}>
            <Card data={student} />
          </Link>
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
