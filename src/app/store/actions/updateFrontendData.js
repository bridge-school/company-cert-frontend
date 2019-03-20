import { UPDATE_FRONTEND_DATA, GET_FRONTEND_DATA_FAILURE, BASE_URL } from '../constants';

const updateAllData = data => ({
  type: UPDATE_FRONTEND_DATA,
  data
});

const updateFrontendData = () => dispatch => {
  fetch(`${BASE_URL}/frontend-data`)
    .then(res => res.json())
    .then(data => dispatch(updateAllData(data)))
    .catch(err => {
      console.log('Error GETting the front-end-data: ', err);
      dispatch({
        type: GET_FRONTEND_DATA_FAILURE
      });
    });
};

export default updateFrontendData;
