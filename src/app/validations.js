const validate = values => {
  const errors = {};
  const requiredFields = ['companyName', 'interviewDate'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default validate;
