import { POST_STUDENT_SUCCESS, POST_STUDENT_FAILURE, RESET_STUDENT_DATA } from '../constants';

const initialState = {
  postSuccess: false,
  studentId: null,
  studentData: {}
};

const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_STUDENT_SUCCESS:
      return {
        ...state,
        postSuccess: true,
        studentId: payload.id
      };
    case POST_STUDENT_FAILURE:
      return {
        ...state,
        postSuccess: false,
        studentId: null
      };
    case RESET_STUDENT_DATA:
      return initialState;
    default:
      return state;
  }
};

export default studentReducer;
