import { GET_STUDENT_SUCCESS, GET_STUDENT_FAILURE, BASE_URL } from '../constants';

const getStudentSuccess = data => ({
  type: GET_STUDENT_SUCCESS,
  payload: data
});

const getStudentFailure = data => ({
  type: GET_STUDENT_FAILURE,
  error: data
});

const getStudentData = studentId => dispatch => {
  fetch(`${BASE_URL}/students/${studentId}`)
    .then(response => response.json())
    .then(json => dispatch(getStudentSuccess(json)))
    .catch(error => {
      console.log('Error GETting the student: ', error);
      dispatch(getStudentFailure(error));
    });
};

export default getStudentData;
