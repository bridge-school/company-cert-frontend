import { POST_STUDENT_SUCCESS } from '../constants';

const initialState = {
  postSuccess: false,
  studentId: null,
  studentData: {}
};

const studentReducer = (state = initialState, { type }) => {
  switch (type) {
    case POST_STUDENT_SUCCESS:
      return {
        ...state,
        postSuccess: true
      };
    default:
      return state;
  }
};

export default studentReducer;
