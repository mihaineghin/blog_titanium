import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Components

import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import AddPost from './components/AddPost/AddPost';
import Carts from './components/Cart/CartCollection';
import PostPage from './components/PostPage/PostPage';

// styles

import './assets/css/styles.min.css';

const App = (props) => {
  const imageUrl = require(`./assets/images/${props.imageName}.jpg`)
  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Body>
        <Router>
          <Switch>
            <Route path="/" exact component={AddPost} />
            <Route path="/posts" exact component={Carts} />
            <Route path="/posts/:id" exact component={PostPage} />
          </Switch>
        </Router>
      </Body>
      <Footer socials={['twitter', 'facebook', 'google']} />
    </div>
  );
};

export default App;
