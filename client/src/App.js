import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Components
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import AddPost from './components/AddPost/AddPost';
import Carts from './components/Cart/CartCollection';
import PostPage from './components/PostPage/PostPage';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';


// styles

import './assets/css/styles.min.css';

const theme = createMuiTheme();
class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const imageUrl = require(`./assets/images/${this.props.imageName}.jpg`);
    console.log(localStorage.getItem('id_token'));

    return (
      <MuiThemeProvider theme={theme} >
        <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
          <Router>
            <div>
              {localStorage.getItem('id_token')
                ?
                <Navbar
                  pages={['Posts', 'Add Post', 'Log out']}
                />
                :
                <Navbar
                  pages={['Login', 'Sign Up']}
                />
              }
              <Body>
                <Switch>
                  <Route path="/" exact component={Welcome} />
                  <Route path="/addpost" exact component={AddPost} />
                  <Route path="/posts" exact component={Carts} />
                  <Route path="/posts/:id" exact component={PostPage} />
                  <Route path="/posts/:id/edit" exact component={AddPost} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/signup" exact component={Signup} />
                  <Route path="*" exact component={NotFound} />
                </Switch>
              </Body>
              <Footer socials={['twitter', 'facebook', 'google']} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider >
    );
  }
}

export default App;
