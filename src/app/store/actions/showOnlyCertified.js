import { SHOW_ALL_COMPANIES, SHOW_CERTIFIED_COMPANIES } from '../constants';

export const showAllCompanies = () => dispatch => {
  dispatch({ type: SHOW_ALL_COMPANIES });
};

export const showCertifiedCompanies = () => dispatch => {
  dispatch({ type: SHOW_CERTIFIED_COMPANIES });
};
