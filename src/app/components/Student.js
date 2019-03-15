import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import getStudentData from '../store/actions/getStudentData';

const tagStyle = { height: '25px', marginRight: '5px', backgroundColor: '#65B8DE' };

class Student extends React.Component {
  componentDidMount() {
    const { match, getStudentData } = this.props; // eslint-disable-line
    getStudentData(match.params.id);
  }

  render() {
    const { studentData, studentMatches } = this.props;
    return (
      <Grid item xs={10} sm={8} md={6}>
        <h1>{studentData.name}</h1>
        <div>
          {studentData &&
            studentData.industry &&
            studentData.industry.map(tag => (
              <Chip label={tag.label} key={tag.value} style={tagStyle} />
            ))}
        </div>
        <div style={{ marginTop: '1rem' }}>
          {studentData &&
            studentData.tech &&
            studentData.tech.map(tag => (
              <Chip label={tag.label} key={tag.value} style={tagStyle} />
            ))}
        </div>
        {studentMatches.map(match => {
          return (
            <div>
              <h2>{match.name}</h2>
              <p>{match.score}</p>
              <div>
                Industry:
                {match.industry.map(industry => (
                  <Chip label={industry.label} style={tagStyle} />
                ))}
              </div>
              <div>
                Tech:
                {match.tech.map(tech => (
                  <Chip label={tech.label} style={tagStyle} />
                ))}
              </div>
            </div>
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  studentData: state.student.studentData,
  studentMatches: state.student.studentMatches
});

const mapDispatchToProps = dispatch => ({
  getStudentData: studentId => dispatch(getStudentData(studentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
