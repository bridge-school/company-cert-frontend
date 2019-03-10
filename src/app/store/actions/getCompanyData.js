import { GET_COMPANY_DATA_SUCCESS, GET_COMPANY_DATA_FAILURE, BASE_URL } from '../constants';

const getCompanyDataSuccessAction = data => ({
  type: GET_COMPANY_DATA_SUCCESS,
  payload: data
});

const getCompanyDataFailureAction = data => ({
  type: GET_COMPANY_DATA_FAILURE,
  error: data
});

const getData = companyId => dispatch => {
  fetch(`${BASE_URL}/companies/${companyId}`)
    .then(response => response.json())
    .then(json => dispatch(getCompanyDataSuccessAction(json)))
    .catch(error => {
      console.log('Error GETting the company: ', error);
      dispatch(getCompanyDataFailureAction(error));
    });
};

export default getData;
