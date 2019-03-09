import { UPDATE_FRONTEND_DATA, BASE_URL } from '../constants';

const updateAllData = data => ({
  type: UPDATE_FRONTEND_DATA,
  data
});

const updateFrontendData = () => dispatch => {
  fetch(`${BASE_URL}/frontend-data`)
    .then(res => res.json())
    .then(data => dispatch(updateAllData(data)));
};

export default updateFrontendData;
