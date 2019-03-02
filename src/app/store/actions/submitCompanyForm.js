const companyData = data => ({
  type: 'SUBMIT_COMPANY_DATA_ACTION',
  data
});

const countCompanyScore = checklistItems =>
  checklistItems ? checklistItems.filter(item => item).length : null;

const parseCheckedIds = checklistData =>
  checklistData
    ? checklistData.reduce((acc, currValue, currIndex) => [...acc, currIndex], [])
    : null;

const postData = (data, score, checklist) => {
  return fetch(`companies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...data, score, checkedIds: checklist })
  }).then(response => response.json());
};

const submit = values => dispatch => {
  const score = countCompanyScore(values.companyChecklist);
  const parsedChecklist = parseCheckedIds(values.companyChecklist);
  // maybe we don't need this action; it is used as a placeholder action for now
  dispatch(companyData(values));
  postData(values, score, parsedChecklist)
    .then(data => {
      console.log('Success POSTing the company, id is ', data);
    })
    .catch(error => console.log('Error POSTing the company: ', error));
};

export default submit;
