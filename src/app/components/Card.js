import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tag from './Tag';

const styles = {
  cardStyle: {
    padding: '10px 20px 15px 20px',
    marginBottom: 20
  },
  margin5: {
    margin: '5px 0'
  },
  margin10: {
    margin: '5px 0 10px 0'
  }
};

const Card = ({ data, total, tags, classes }) => {
  return (
    <Paper className={classes.cardStyle} key={data.id}>
      <h3 className={total ? classes.margin5 : classes.margin10}>{data.name}</h3>
      {total && (
        <Typography variant="overline" gutterBottom>
          Score: {Math.round((data.score / total) * 100)}%
        </Typography>
      )}
      <div>
        {tags.map((tag, index) => (
          <Tag label={tag.label} key={index} />
        ))}
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Card);
