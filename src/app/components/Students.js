import React from 'react';
import { connect } from 'react-redux';
import getStudentsData from '../store/actions/getStudentsData';

class Students extends React.Component {
  componentDidMount() {
    const { getStudentsData } = this.props;  // eslint-disable-line
    getStudentsData();
  }

  render() {
    return <h1>Students</h1>;
  }
}

const mapStateToProps = state => ({ students: state.students.data });

const mapDispatchToProps = dispatch => ({ getStudentsData: () => dispatch(getStudentsData()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
