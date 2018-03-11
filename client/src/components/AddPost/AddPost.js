import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class AddPost extends Component {
    
    constructor () {
        super();
        this.state = {
            fireRedirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {

        e.preventDefault()

        let postData = {
            title: this.title.value,
            description: this.description.value,
            cartImage: this.cartImage.value
        }
        
        fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (res.ok){
                return res.json();
            } else {
                throw new Error ('Something went wrong with your fetch');
            }
        })
        .then((json) => {
            console.log(json);
        })
        
        this.setState({ fireRedirect: true })
        
    }

    render() {
        const { from } = this.props.location.state || '/';
        const { fireRedirect } = this.state;
        return(
            <div className="add-post_container">
                <form method="post" action="api/posts" onSubmit={this.handleSubmit}>
                    <input placeholder="Post title" ref={(input) => this.title = input} />   
                    <textarea placeholder="post-content" ref={(input) => this.description = input}></textarea>
                    <input type="file" ref={(input) => this.cartImage = input} />
                    <input type="submit" value="Fly" />
                </form>
 
                {fireRedirect && (
                    <Redirect to={from || '/posts'}/>
                )}
            </div>
        )
    }
}
