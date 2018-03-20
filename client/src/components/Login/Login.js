import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange = prop => e => {
  //   this.setState({ [prop]: e.target.value });
  // };
  getToken() {
    return localStorage.getItem('id_token')
  }

  handleChange(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  login(e) {
    e.preventDefault();

    const formData = this.state;

    axios.post('/api/users/check', formData)
      .then((res) => {
        if (res.data) {
          this.setToken(res.data);
          window.location.href = '/posts';
        } else {
          alert('Incorect username or password')
        }
      })
      .catch(err => console.log(err));
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h1 className="form-title">Login</h1>
              <form onSubmit={this.login}>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    htmlFor="username"
                  >
                    Username
                  </InputLabel>
                  <Input
                    className={classes.textField}
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    htmlFor="password"
                  >
                    Password
                  </InputLabel>
                  <Input
                    className={classes.textField}
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    type="password"
                  />
                </FormControl>
                <Button type="submit" variant="raised" size="medium" color="primary">Log in</Button>
              </form>
              <div className="form-footer">
                <p>Don't have an acount? <Link to="/signup">click here!</Link></p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
