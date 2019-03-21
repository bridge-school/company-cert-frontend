import { UPDATE_FRONTEND_DATA, GET_FRONTEND_DATA_FAILURE } from '../constants';

const initialState = {
  getFrontendFailure: false,
  checklist: [],
  tech: [],
  industry: []
};

const frontendData = (state = initialState, { type, data }) => {
  switch (type) {
    case UPDATE_FRONTEND_DATA:
      return {
        ...state,
        checklist: data.checklist,
        tech: data.tech,
        industry: data.industry
      };
    case GET_FRONTEND_DATA_FAILURE:
      return {
        ...state,
        getFrontendFailure: true
      };
    default:
      return state;
  }
};

export default frontendData;
