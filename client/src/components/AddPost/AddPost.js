import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';

export default class AddPost extends Component {
    
    constructor () {
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

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        formData.append('title', this.title.value);
        formData.append('moto', this.moto.value);
        formData.append('description', this.description.value);

        axios.post('/api/posts', formData).then((response) => {
            this.props.history.push('/posts')
            // console.log(response)
        }); 
        
        
        this.setState({ fireRedirect: true })
        
    }

    render() {
        const { from } = this.props.location.state || '/'; 
        const { fireRedirect } = this.state;
        return(
            <div className="add-post_container">
                <form method="post" action="api/posts" onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <input placeholder="Post title" ref={(input) => this.title = input} /> 
                    <input placeholder="Moto" ref={(input) => this.moto = input} />    
                    <textarea placeholder="post-content" ref={(input) => this.description = input}></textarea>
                    <input type="file" id="image" name="image" onChange={this.onChange} />
                    <input type="submit" value="Fly" />
                </form>
            </div>
        )
    }
}
