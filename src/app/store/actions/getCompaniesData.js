import { GET_COMPANIES_DATA_SUCCESS, GET_COMPANIES_DATA_FAILURE, BASE_URL } from '../constants';

// Action Creators
const getCompaniesDataSuccessAction = data => ({
  type: GET_COMPANIES_DATA_SUCCESS,
  data
});

const getCompaniesDataFailureAction = data => ({
  type: GET_COMPANIES_DATA_FAILURE,
  data
});

// Thunk
export default () => dispatch => {
  fetch(`${BASE_URL}/companies`)
    .then(response => response.json())
    .then(json => {
      return dispatch(getCompaniesDataSuccessAction(json.data));
    })
    .catch(error => {
      console.error('Error getting the companies: ', error);
      dispatch(getCompaniesDataFailureAction(error));
    });
};
