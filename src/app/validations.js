const validate = values => {
  const errors = {};
  const requiredFields = ['companyName', 'interviewDate'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  const minimumOneRequired = ['industry', 'tech']
  minimumOneRequired.forEach(field => {
    if (values[field] < 1) {
      errors[field] = 'At least one item required'
    }
  })
  return errors;
};

export default validate;
