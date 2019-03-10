import { UPDATE_FRONTEND_DATA } from '../constants';

const initialState = {
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
    default:
      return state;
  }
};

export default frontendData;
