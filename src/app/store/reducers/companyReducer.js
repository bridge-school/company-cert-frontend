import {
  POST_COMPANY_SUCCESS,
  POST_COMPANY_FAILURE,
  RESET_COMPANY_DATA,
  GET_COMPANY_DATA_SUCCESS,
  GET_COMPANY_DATA_FAILURE
} from '../constants';

const initialState = {
  postSuccess: false,
  getCompanySuccess: false,
  companyId: null,
  companyData: {}
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
    default:
      return state;
  }
};

export default companyReducer;
