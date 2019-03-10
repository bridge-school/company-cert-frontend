import { GET_STUDENTS_SUCCESS, GET_STUDENTS_FAILURE } from '../constants';

const initialState = {
  studentsData: [],
  getSuccess: false
};

const studentsReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        getSuccess: true,
        studentsData: data
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
