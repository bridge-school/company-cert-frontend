import {
  POST_STUDENT_SUCCESS,
  POST_STUDENT_FAILURE,
  RESET_STUDENT_DATA,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAILURE,
  GET_MATCHES
} from '../constants';

const initialState = {
  postSuccess: false,
  getSuccess: false,
  studentId: null,
  studentData: {},
  studentMatches: []
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
    case GET_STUDENT_SUCCESS:
      return {
        ...state,
        getSuccess: true,
        studentData: payload
      };
    case GET_STUDENT_FAILURE:
      return {
        ...state,
        getSuccess: false,
        studentData: {}
      };
    case GET_MATCHES:
      return {
        ...state,
        studentMatches: payload
      };
    default:
      return state;
  }
};

export default studentReducer;
