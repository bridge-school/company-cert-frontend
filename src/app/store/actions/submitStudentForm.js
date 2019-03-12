import {
  POST_STUDENT_SUCCESS,
  POST_STUDENT_FAILURE,
  BASE_URL,
  RESET_STUDENT_DATA
} from '../constants';

export const resetAction = () => ({
  type: RESET_STUDENT_DATA
});

const postStudentData = data => {
  return fetch(`${BASE_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...data })
  }).then(response => response.json());
};

const submit = values => dispatch => {
  postStudentData(values)
    .then(res => {
      dispatch({
        type: POST_STUDENT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: POST_STUDENT_FAILURE,
        payload: err
      });
    });
};

export default submit;
