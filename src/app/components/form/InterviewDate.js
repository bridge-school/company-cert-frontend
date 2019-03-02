import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
/* eslint-disable */
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from 'material-ui-pickers';
import EventIcon from '@material-ui/icons/Event';

const InterviewDate = ({ label, input, meta: { touched, invalid, error } }) => {
  return (
    <FormGroup>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          required
          label={label}
          {...input}
          onChange={input.onChange}
          format="dd/MM/yyyy"
          margin="normal"
          keyboard
          keyboardIcon={<EventIcon />}
          error={touched && invalid}
        />
      </MuiPickersUtilsProvider>
    </FormGroup>
  );
};

export default InterviewDate;
