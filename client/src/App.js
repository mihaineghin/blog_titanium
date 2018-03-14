import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Components

import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import AddPost from './components/AddPost/AddPost';
import Carts from './components/Cart/CartCollection';
import PostPage from './components/PostPage/PostPage';
import Navbar from './components/Navbar/Navbar';

// styles

import './assets/css/styles.min.css';

const App = (props) => {
  const imageUrl = require(`./assets/images/${props.imageName}.jpg`)
  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Router>
        <div>
          <Navbar pages={['Posts', 'Add Post', 'Login', 'Sing Up']} />
          <Body>
            <Switch>
              <Route path="/addpost" exact component={AddPost} />
              <Route path="/posts" exact component={Carts} />
              <Route path="/posts/:id" exact component={PostPage} />
              <Route path="/posts/:id/edit" exact component={AddPost} />
            </Switch>
          </Body>
          <Footer socials={['twitter', 'facebook', 'google']} />
        </div>
      </Router>
    </div>
  );
};

export default App;
