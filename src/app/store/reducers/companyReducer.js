import { POST_COMPANY_SUCCESS, POST_COMPANY_FAILURE } from '../constants';

const initialState = {
  postSuccess: false,
  companyId: null
}

const companyReducer = (state = initialState, {type, payload} ) => {
  switch (type) {
    case POST_COMPANY_SUCCESS:
      return {
        ...state,
        postSuccess: true,
        companyId: payload.id,
      }
    case POST_COMPANY_FAILURE:
      return {
        ...state,
        postSuccess: false,
        companyId: null
      }
    case POST_COMPANY_RESET:
      return initialState
    default: 
      return state;
  }
}

export default companyReducer;