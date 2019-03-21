import { GET_STUDENTS_SUCCESS, GET_STUDENTS_FAILURE } from '../constants';

const initialState = {
  isLoaded: false,
  studentsData: [],
  getSuccess: false
};

const studentsReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        getSuccess: true,
        studentsData: data
      };
    case GET_STUDENTS_FAILURE:
      return {
        state,
        isLoaded: true,
        getSuccess: false,
        studentsData: []
      };
    default:
      return state;
  }
};

export default studentsReducer;
