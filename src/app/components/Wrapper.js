import React from 'react';
import Grid from '@material-ui/core/Grid';

const Wrapper = props => {
  return (
    <div style={{ paddingTop: 80, paddingBottom: 280 }}>
      <Grid container justify="center">
        {props.children}
      </Grid>
    </div>
  );
};

export default Wrapper;
