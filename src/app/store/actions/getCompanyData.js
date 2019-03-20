import {
  GET_COMPANY_DATA_SUCCESS,
  GET_COMPANY_DATA_FAILURE,
  BASE_URL,
  GET_COMPANY_MATCHES,
  GET_COMPANY_MATCHES_ERROR
} from '../constants';
import matchCompanyAndStudents from '../../helpers';

const getCompanyDataSuccessAction = data => ({
  type: GET_COMPANY_DATA_SUCCESS,
  payload: data
});

const getCompanyDataFailureAction = data => ({
  type: GET_COMPANY_DATA_FAILURE,
  error: data
});

const getMatches = data => ({
  type: GET_COMPANY_MATCHES,
  payload: data
});

const getCompanyData = companyId => dispatch => {
  fetch(`${BASE_URL}/companies/${companyId}`)
    .then(response => response.json())
    .then(companyJson => {
      dispatch(getCompanyDataSuccessAction(companyJson));
      fetch(`${BASE_URL}/students`)
        .then(response => response.json())
        .then(studentsJson => {
          dispatch(getMatches(matchCompanyAndStudents(companyJson, studentsJson)));
        })
        .catch(error => {
          console.log('Error GETting the company matches: ', error);
          dispatch({
            type: GET_COMPANY_MATCHES_ERROR
          });
        });
    })
    .catch(error => {
      console.log('Error GETting the company: ', error);
      dispatch(getCompanyDataFailureAction(error));
    });
};

export default getCompanyData;
