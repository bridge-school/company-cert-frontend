const companyData = data => ({
  type: 'SUBMIT_COMPANY_DATA_ACTION',
  data
});

const submit = values => dispatch => {
  const score = countCompanyScore(values.companyChecklist);
  // maybe we don't need this action; it is used as a placeholder action for now
  dispatch(companyData(values));
  console.log(values);
  // make the POST request with form values here
};

const countCompanyScore = checklistItems => checklistItems.filter(item => item).length;

export default submit;
