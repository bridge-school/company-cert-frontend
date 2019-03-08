import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const style = {
  display: 'flex',
  alignItems: 'center'
};

const CheckedParagraph = ({ text }) => (
  <p style={style}>
    <SvgIcon style={{ marginRight: '5px' }}>
      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
        <path
          fill="#08C39D"
          d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"
        />
      </svg>
    </SvgIcon>
    {text}
  </p>
);

export default CheckedParagraph;
