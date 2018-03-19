import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import axios from 'axios'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 7,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  center: {
    justify: 'center',
  },
  textField: {
    width: '100%',
    fontSize: '18px',
  },
  inputLabel: {
  },
  inputLabelFocused: {
    color: '#96A995',
  },
  formControl: {
    display: 'flex',
    marginBottom: '20px',
  },
});

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = prop => e => {
    this.setState({ [prop]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password, repeatPassword } = this.state;

    if (password === repeatPassword) {

      let formData = {
        username,
        password
      }

      axios.post('/api/users', formData)
        .then((res) => console.log(res.data))
        .catch(err => console.log(err))

    } else {
      alert('Passwords do not match')
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h1 className="form-title">Sign up</h1>
              <form onSubmit={this.handleSubmit}>

                <FormControl required={true} className={classes.formControl}>
                  <InputLabel
                    htmlFor="username"
                  >
                    Username
                  </InputLabel>
                  <Input
                    className={classes.textField}
                    id="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                  />
                </FormControl>

                <FormControl required={true} className={classes.formControl}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    className={classes.textField}
                    id="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                  />
                </FormControl>

                <FormControl required={true} className={classes.formControl}>
                  <InputLabel htmlFor="adornment-password">Repeat password</InputLabel>
                  <Input
                    className={classes.textField}
                    id="adornment-password"
                    value={this.state.repeatPassword}
                    onChange={this.handleChange('repeatPassword')}
                  />
                </FormControl>

                <Button type="submit" variant="raised" size="medium" color="primary">Log in</Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
