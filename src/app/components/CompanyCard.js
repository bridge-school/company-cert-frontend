import React from 'react';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

// Styles
const tagStyle = { height: '25px', marginRight: '5px', backgroundColor: '#65B8DE' };

// Helper function
const chooseRandomTags = (tagsArray, n) => {
  // Shuffle array
  const shuffled = tagsArray.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, n);

  return selected;
};

const CompanyCard = ({ id, name, industry, tech }) => {
  return (
    <div>
      <h4 style={{ textAlign: 'center', margin: '0 0 20px' }}>
        <Link to={`/companies/${id}`}>{name}</Link>
      </h4>
      <div style={{ textAlign: 'center' }}>
        {chooseRandomTags(tech, 3).map(tag => (
          <Chip label={tag.label} key={tag.value} style={tagStyle} />
        ))}

        {chooseRandomTags(industry, 2).map(tag => (
          <Chip label={tag.label} key={tag.value} style={tagStyle} />
        ))}
      </div>
      <Divider style={{ margin: '20px' }} />
    </div>
  );
};

export default CompanyCard;
