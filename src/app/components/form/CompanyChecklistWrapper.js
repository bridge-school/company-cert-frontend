import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Field } from 'redux-form';

import CompanyChecklist from './CompanyChecklist';

const CompanyChecklistWrapper = ({ input, checklistData }) => {
  return (
    <FormControl margin="normal" style={{ display: 'block' }}>
      <FormLabel component="legend">Company Checklist</FormLabel>
      <FormGroup>
        { checklistData === undefined || checklistData.length === 0 ? <p>Loading...</p> :
          checklistData.map((value, index) => (
            <Field
              key={index}
              name={`companyChecklist.${value.id}`}
              component={CompanyChecklist}
              label={value.name}
            />
          ))
        }
      </FormGroup>
    </FormControl>
  );
};

export default CompanyChecklistWrapper;
