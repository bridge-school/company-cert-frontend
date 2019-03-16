import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  matchStyle: {
    padding: '10px 20px 15px 20px',
    marginBottom: 20
  },
  tagStyle: {
    height: 25,
    margin: '0 5px 5px 0',
    backgroundColor: '#65B8DE'
  },
  h3: {
    margin: '5px 0'
  }
};

const Match = ({ match, classes: { matchStyle, tagStyle, h3 } }) => (
  <Paper className={matchStyle} key={match.id}>
    <h3 className={h3}>{match.name}</h3>
    <Typography variant="overline" gutterBottom>
      Score: {match.score}
    </Typography>
    <div>
      {[...match.industry, ...match.tech].map((tag, index) => (
        <Chip label={tag.label} className={tagStyle} key={index} />
      ))}
    </div>
  </Paper>
);

export default withStyles(styles)(Match);
