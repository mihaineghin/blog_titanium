import React, { Component } from 'react';
import axios from 'axios';

import Cart from './Cart';
// import data from '../../data/data'

class Carts extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentWillMount() {
    axios('/api/posts')
      .then((res) => {
        const { data } = res;
        this.setState({ posts: data });
      });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    const { posts, search } = this.state;
    return (
      <div>
        <div className="search">
          <input
            id="search-box"
            className="search-input"
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <label
            className="search-label"
            htmlFor="search-box"
          >
            <i className="fa fa-search" />
          </label>
        </div>
        {posts &&
          posts.map((el, index) =>
            (search.length === 0
              ? <Cart {...el} key={index} urlKey={el._id} />
              : el.moto.toLowerCase()
                .includes(search.toLowerCase()) && <Cart {...el} key={index} urlKey={el._id} />
            ))
        }
      </div>
    );
  }
}

export default Carts;
