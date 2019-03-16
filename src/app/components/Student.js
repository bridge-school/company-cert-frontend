import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import getStudentData from '../store/actions/getStudentData';
import Match from './Match';

const styles = {
  section: {
    marginBottom: 30
  },
  tagStyle: {
    height: 25,
    margin: '0 5px 5px 0',
    backgroundColor: '#65B8DE'
  }
};

class Student extends React.Component {
  componentDidMount() {
    const { match, getStudentData } = this.props; // eslint-disable-line
    getStudentData(match.params.id);
  }

  render() {
    const {
      studentData,
      studentMatches,
      classes: { tagStyle, section }
    } = this.props;
    return (
      <Grid item xs={10} sm={8} md={6}>
        <h1>{studentData.name}</h1>
        <div className={section}>
          <Typography variant="overline" gutterBottom>
            Industry
          </Typography>
          {studentData &&
            studentData.industry &&
            studentData.industry.map(tag => (
              <Chip label={tag.label} key={tag.value} className={tagStyle} />
            ))}
        </div>
        <div className={section}>
          <Typography variant="overline" gutterBottom>
            Tech
          </Typography>
          {studentData &&
            studentData.tech &&
            studentData.tech.map(tag => (
              <Chip label={tag.label} key={tag.value} className={tagStyle} />
            ))}
        </div>
        <Typography variant="overline" gutterBottom>
          {studentMatches.length} Match
          {studentMatches.length > 1 && studentMatches.length !== 0 ? 'es' : null}
        </Typography>
        {studentMatches.map(match => (
          <Match key={match.id} match={match} />
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = ({ student }) => ({
  studentData: student.studentData,
  studentMatches: student.studentMatches,
  getSuccess: student.getSuccess
});

const mapDispatchToProps = dispatch => ({
  getStudentData: studentId => dispatch(getStudentData(studentId))
});

const StyledStudent = withStyles(styles)(Student);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledStudent);
