import React, { Component } from 'react';
import axios from 'axios';

import Cart from './Cart'
// import data from '../../data/data'

class Carts extends Component {

  state = {

  };

  componentWillMount() {
    axios("/api/posts")
      .then(res => {
        let data = res.data
        this.setState({ data });
      })
  }

  render() {
    let posts = this.state.data;
    return (
      <div>
        {posts &&
          posts.map((el, index) => <Cart {...el} key={index} urlKey={el._id} />)
        }
      </div>
    )
  }
}

export default Carts