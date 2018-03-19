import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: '',
      title: '',
      author: '',
      description: '',
      moto: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMoto = this.handleMoto.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { state } = this;
    state.selectedFile = e.target.files[0];

    this.setState(state);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleMoto(e) {
    this.setState({ moto: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleAuthor(e) {
    this.setState({ author: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const id = this.props.location.pathname.split('/');

    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    formData.append('title', this.state.title);
    formData.append('moto', this.state.moto);
    formData.append('author', this.state.author);
    formData.append('description', this.state.description);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    if (this.props.location.pathname !== `/posts/${id[id.length - 2]}/edit`) {
      axios.post('/api/posts', formData, config)
        .then(() => {
          this.props.history.push('/posts');
        })
        .catch(err => console.log(err));
    } else {
      axios.patch(`/api/posts/${id[id.length - 2]}`, formData, config)
        .then((response) => {
          this.props.history.push(`/posts/${id[id.length - 2]}`);
          console.log(response);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className="add-post_container">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Post title" value={this.state.title} onChange={this.handleTitle} />
          <input placeholder="Moto" value={this.state.moto} onChange={this.handleMoto} />
          <input placeholder="Author name" value={this.state.author} onChange={this.handleAuthor} />
          <textarea placeholder="post-content" value={this.state.description} onChange={this.handleDescription} />
          <input type="file" id="image" name="image" onChange={this.onChange} />
          <input type="submit" value="Fly" />
        </form>
      </div>
    );
  }
}

export default AddPost;