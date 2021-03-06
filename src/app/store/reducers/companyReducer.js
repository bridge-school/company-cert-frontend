import {
  POST_COMPANY_SUCCESS,
  POST_COMPANY_FAILURE,
  RESET_COMPANY_DATA,
  GET_COMPANY_DATA_SUCCESS,
  GET_COMPANY_DATA_FAILURE,
  GET_COMPANY_MATCHES,
  GET_COMPANY_MATCHES_ERROR
} from '../constants';

const initialState = {
  postSuccess: false,
  getCompanySuccess: false,
  companyId: null,
  companyData: {},
  companyMatches: [],
  getCompanyMatchesFailure: false
};

const companyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_COMPANY_SUCCESS:
      return {
        ...state,
        postSuccess: true,
        companyId: payload.id
      };
    case POST_COMPANY_FAILURE:
      return {
        ...state,
        postSuccess: false,
        companyId: null
      };
    case RESET_COMPANY_DATA:
      return initialState;
    case GET_COMPANY_DATA_SUCCESS:
      return {
        ...state,
        getCompanySuccess: true,
        companyData: payload
      };
    case GET_COMPANY_DATA_FAILURE:
      return {
        ...state,
        getCompanySuccess: false,
        companyData: null
      };
    case GET_COMPANY_MATCHES:
      return {
        ...state,
        companyMatches: payload
      };
    case GET_COMPANY_MATCHES_ERROR:
      return {
        ...state,
        getCompanyMatchesFailure: true
      };
    default:
      return state;
  }
};

export default companyReducer;
