import {
  POST_COMPANY_SUCCESS,
  POST_COMPANY_FAILURE,
  RESET_COMPANY_DATA,
  BASE_URL
} from '../constants';

const countCompanyScore = checklistItems =>
  checklistItems ? checklistItems.filter(item => item).length : null;

const parseCheckedIds = checklistData =>
  checklistData ? checklistData.map((item, index) => item && index) : null;

const postData = (data, score, checklist) => {
  return fetch(`${BASE_URL}/companies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...data, score, checkedIds: checklist })
  }).then(response => response.json());
};

const postSuccessAction = data => ({
  type: POST_COMPANY_SUCCESS,
  payload: data
});

const postFailureAction = data => ({
  type: POST_COMPANY_FAILURE,
  payload: data
});

export const resetAction = () => ({
  type: RESET_COMPANY_DATA
});

const submit = values => dispatch => {
  const score = countCompanyScore(values.companyChecklist);
  const parsedChecklist = parseCheckedIds(values.companyChecklist);
  postData(values, score, parsedChecklist)
    .then(data => {
      dispatch(postSuccessAction(data));
    })
    .catch(error => {
      console.log('Error POSTing the company: ', error);
      dispatch(postFailureAction(error));
    });
};

export default submit;
