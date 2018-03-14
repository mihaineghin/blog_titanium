import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      selectedFile: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    const state = this.state;
    state.selectedFile = e.target.files[0];

    this.setState(state);
  }

  handleSubmit = (e) => {

    e.preventDefault()

    let id = this.props.location.pathname.split('/');

    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    formData.append('title', this.title.value);
    formData.append('moto', this.moto.value);
    formData.append('author', this.author.value);
    formData.append('description', this.description.value);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    if (this.props.location.pathname !== `/posts/${id[id.length - 2]}/edit`) {
      axios.post('/api/posts', formData, config)
        .then((response) => {
          this.props.history.push('/posts')
        });
    } else {
      axios.patch(`/api/posts/${id[id.length - 2]}`, formData, config)
        .then((response) => {
          this.props.history.push(`/posts/${id[id.length - 2]}`)
          console.log(response)
        })
        .catch(err => console.log(err));
    }
  }

  render() {

    return (
      <div className="add-post_container">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Post title" ref={(input) => this.title = input} />
          <input placeholder="Moto" ref={(input) => this.moto = input} />
          <input placeholder="Author name" ref={(input) => this.author = input} />
          <textarea placeholder="post-content" ref={(input) => this.description = input}></textarea>
          <input type="file" id="image" name="image" onChange={this.onChange} />
          <input type="submit" value="Fly" />
        </form>
      </div>
    )
  }
}

export default AddPost;