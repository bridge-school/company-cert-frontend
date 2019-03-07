import { GET_COMPANY_DATA_SUCCESS, GET_COMPANY_DATA_FAILURE } from '../constants';

const getCompanyDataSuccessAction = data => ({
  type: GET_COMPANY_DATA_SUCCESS,
  data
});

const getCompanyDataFailureAction = data => ({
  type: GET_COMPANY_DATA_FAILURE,
  error: data
});

const getData = companyId => dispatch => {
  fetch(`/companies/${companyId}`)
    .then(response => response.json())
    .then(json => dispatch(getCompanyDataSuccessAction(json)))
    .catch(error => {
      console.log('Error GETting the company: ', error);
      dispatch(getCompanyDataFailureAction(error));
    });
};

export default getData;
