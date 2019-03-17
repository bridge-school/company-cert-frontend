import { GET_STUDENT_SUCCESS, GET_STUDENT_FAILURE, BASE_URL, GET_MATCHES } from '../constants';
import matchStudentAndCompanies from '../../helpers';

const getStudentSuccess = data => ({
  type: GET_STUDENT_SUCCESS,
  payload: data
});

const getStudentFailure = data => ({
  type: GET_STUDENT_FAILURE,
  error: data
});

const getMatches = data => ({
  type: GET_MATCHES,
  payload: data
});

const getStudentData = studentId => dispatch => {
  fetch(`${BASE_URL}/students/${studentId}`)
    .then(response => response.json())
    .then(studentJson => {
      dispatch(getStudentSuccess(studentJson));
      fetch(`${BASE_URL}/companies?filter=certified`)
        .then(response => response.json())
        .then(companiesJson => {
          const companies = companiesJson.data;
          dispatch(getMatches(matchStudentAndCompanies(studentJson, companies)));
        });
    })
    .catch(error => {
      console.log('Error GETting the student: ', error);
      dispatch(getStudentFailure(error));
    });
};

export default getStudentData;
