const validate = values => {
  const errors = {};
  const requiredFields = ['companyName', 'interviewDate', 'industry', 'tech'];
  requiredFields.forEach(field => {
    // console.log(values[field]);
    if (!values[field] || values[field].length < 1) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default validate;
