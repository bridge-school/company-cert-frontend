import React from 'react';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';

const StudentCard = ({ name, id }) => {
  return (
    <div>
      <h2 style={{ margin: '20px 0' }}>
        <Link to={`/students/${id}`}>{name}</Link>
      </h2>
      <Divider />
    </div>
  );
};

export default StudentCard;
