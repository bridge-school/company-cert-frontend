import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import EventIcon from '@material-ui/icons/Event';
import Button from '@material-ui/core/Button';

const Student = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [name, handleName] = useState('');

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <div style={{ padding: 50 }}>
          <form autoComplete="off">
            <h1>Student Info</h1>
            <FormControl margin="normal" style={{ display: 'block' }}>
              <TextField
                label="Full Name*"
                value={name}
                onChange={event => handleName(event.target.value)}
                margin="normal"
              />
            </FormControl>
            <FormControl margin="normal" style={{ display: 'block' }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  required
                  label="Interview Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  format="dd/MM/yyyy"
                  margin="normal"
                  keyboard
                  keyboardIcon={<EventIcon />}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Student;
