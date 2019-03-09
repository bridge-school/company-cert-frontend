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
      const companies = json.data;

      // Sort companies by name alphabetically
      companies.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // ignore upper and lowercase
        const nameB = b.name.toLowerCase(); // ignore upper and lowercase

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });

      return dispatch(getCompaniesDataSuccessAction(companies));
    })
    .catch(error => {
      console.error('Error getting the companies: ', error);
      dispatch(getCompaniesDataFailureAction(error));
    });
};
