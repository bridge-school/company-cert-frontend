import { POST_STUDENT_SUCCESS } from '../constants';

const submit = values => dispatch => {
  console.log('student info is dispatched: ', values);

  // POST request here
  dispatch({
    type: POST_STUDENT_SUCCESS,
    payload: values
  });
};

export default submit;
