import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

const CompanyName = ({ label, input, meta: { touched, invalid, error } }) => {
  return (
    <FormGroup>
      <TextField
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
