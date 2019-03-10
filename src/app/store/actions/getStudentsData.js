import { GET_STUDENTS_SUCCESS, GET_STUDENTS_FAILURE, BASE_URL } from '../constants';

const getStudentsDataSuccessAction = data => ({
  type: GET_STUDENTS_SUCCESS,
  data
});

const getStudentsDataFailureAction = data => ({
  type: GET_STUDENTS_FAILURE,
  data
});

const getStudentsData = () => dispatch => {
  fetch(`${BASE_URL}/students`)
    .then(response => response.json())
    .then(json => {
      const students = json;
      return dispatch(getStudentsDataSuccessAction(students));
    })
    .catch(error => dispatch(getStudentsDataFailureAction(error)));
};

export default getStudentsData;
