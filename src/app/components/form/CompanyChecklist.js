import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CompanyChecklist = ({ label, input }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />}
      label={label}
    />
  );
};

export default CompanyChecklist;
