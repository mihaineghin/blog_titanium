import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Components
import Body from './components/Body/Body'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import AddPost from './components/AddPost/AddPost'
import Carts from './components/Cart/CartCollection'

//styles
import './assets/css/styles.min.css';



class App extends Component {
  render() {
    const imageUrl = require(`./assets/images/${this.props.imageName}.jpg`)
    return (
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <Body>
          <Router> 
            <Switch>
              <Route path='/' exact component={AddPost} />
              <Route path='/posts' component={Carts} />
            </Switch>
          </Router>
        </Body>
        <Footer socials={['twitter', 'facebook', 'google']} />
      </div>
    );
  }
}

export default App;
