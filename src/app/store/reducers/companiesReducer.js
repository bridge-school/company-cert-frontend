import {
  GET_COMPANIES_DATA_SUCCESS,
  GET_COMPANIES_DATA_FAILURE,
  SHOW_ALL_COMPANIES,
  SHOW_CERTIFIED_COMPANIES
} from '../constants';

const initialState = {
  getCompaniesSuccess: false,
  data: [],
  showOnlyCertified: false
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
    case SHOW_ALL_COMPANIES:
      return {
        ...state,
        showOnlyCertified: false
      };
    case SHOW_CERTIFIED_COMPANIES:
      return {
        ...state,
        showOnlyCertified: true
      };
    default:
      return state;
  }
};
