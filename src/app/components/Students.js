import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import getStudentsData from '../store/actions/getStudentsData';
import Card from './Card';
import { Link } from 'react-router-dom';

const chooseRandomTags = (tagsArray, n) => {
  // Shuffle array
  const shuffled = tagsArray.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, n);

  return selected;
};

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
            <Card
              data={student}
              tags={[
                ...chooseRandomTags(student.tech, 3),
                ...chooseRandomTags(student.industry, 2)
              ]}
            />
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
