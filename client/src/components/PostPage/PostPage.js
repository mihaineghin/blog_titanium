import React, { Component } from 'react';
import axios from 'axios';
import PostCart from './PostCart';

export default class PostPage extends Component {

  state = {

  }

  componentDidMount() {
    axios(`/api/posts/${this.props.match.params.id}`)
      .then(res => {
        let data = res.data
        this.setState({ data });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <PostCart {...this.state.data} />
    )
  }
}
