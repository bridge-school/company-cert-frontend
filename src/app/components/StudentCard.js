import React from 'react';

import Divider from '@material-ui/core/Divider';

const StudentCard = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Divider />
    </div>
  );
};

export default StudentCard;
