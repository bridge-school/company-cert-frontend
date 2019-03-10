import { GET_STUDENTS_SUCCESS, GET_STUDENTS_FAILURE } from '../constants';

const initialState = {
  studentsData: [],
  getSuccess: false
};

const studentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        getSuccess: true,
        studentsData: payload
      };
    case GET_STUDENTS_FAILURE:
      return {
        state,
        getSuccess: false,
        studentsData: []
      };
    default:
      return state;
  }
};

export default studentsReducer;
