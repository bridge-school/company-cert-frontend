import { GET_COMPANIES_DATA_SUCCESS, GET_COMPANIES_DATA_FAILURE } from '../constants';

const initialState = {
  getCompaniesSuccess: false,
  data: []
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case GET_COMPANIES_DATA_SUCCESS:
      return {
        ...state,
        getCompaniesSuccess: true,
        data
      };
    case GET_COMPANIES_DATA_FAILURE:
      return {
        ...state,
        getCompaniesSuccess: false,
        data: null
      };
    default:
      return state;
  }
};
