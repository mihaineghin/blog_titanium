import React, { Component } from 'react';
import axios from 'axios';
import PostCart from './PostCart';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';


export default class PostPage extends Component {
  constructor() {
    super();
    this.state = {};
    this.handlePostEdit = this.handlePostEdit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }

  componentDidMount() {
    axios(`/api/posts/${this.props.match.params.id}`)
      .then((res) => {
        const { data } = res;
        this.setState({ data });
      })
      .catch(error => console.log(error));
  }

  handlePostEdit() {
    this.props.history.push(`${this.props.location.pathname}/edit`);
  }

  handlePostDelete() {
    axios.delete(`/api/posts/${this.props.match.params.id}`)
      .then(() => {
        this.props.history.push('/posts');
      });
  }

  render() {
    return (
      <PostCart {...this.state.data}>
        <DeleteButton onClick={this.handlePostDelete} />
        <EditButton onClick={this.handlePostEdit} />
      </PostCart>
    );
  }
}
