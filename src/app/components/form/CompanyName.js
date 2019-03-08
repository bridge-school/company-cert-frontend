import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

const CompanyName = ({ label, input, meta: { touched, invalid } }) => {
  return (
    <FormGroup>
      <TextField
        required
        id="company-name"
        label={label}
        {...input}
        margin="normal"
        error={touched && invalid}
      />
    </FormGroup>
  );
};

export default CompanyName;
