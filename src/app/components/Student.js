import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import getStudentData from '../store/actions/getStudentData';
import Card from './Card';
import Tag from './Tag';
import { Link } from 'react-router-dom';

const styles = {
  section: {
    marginBottom: 30
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
      checklist,
      classes: { section }
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
            studentData.industry.map(tag => <Tag label={tag.label} key={tag.value} />)}
        </div>
        <div className={section}>
          <Typography variant="overline" gutterBottom>
            Tech
          </Typography>
          {studentData &&
            studentData.tech &&
            studentData.tech.map(tag => <Tag label={tag.label} key={tag.value} />)}
        </div>
        <Typography variant="overline" gutterBottom>
          {studentMatches.length} Match
          {studentMatches.length > 1 || studentMatches.length === 0 ? 'es' : null}
        </Typography>
        {studentMatches.map(match => (
          <Link to={`/companies/${match.id}`} key={match.id}>
            <Card data={match} total={checklist.length} />
          </Link>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = ({ student, frontendData }) => ({
  studentData: student.studentData,
  studentMatches: student.studentMatches,
  checklist: frontendData.checklist
});

const mapDispatchToProps = dispatch => ({
  getStudentData: studentId => dispatch(getStudentData(studentId))
});

const StyledStudent = withStyles(styles)(Student);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledStudent);
