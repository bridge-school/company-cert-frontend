import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

/**
 * This is the name field which is used across the site
 * Used by company form and student form.
 */

const NameField = ({ label, input, id, meta: { touched, invalid } }) => {
  return (
    <FormGroup>
      <TextField
        required
        id={id}
        label={label}
        {...input}
        margin="normal"
        error={touched && invalid}
      />
    </FormGroup>
  );
};

export default NameField;
