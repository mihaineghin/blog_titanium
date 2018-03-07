import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'


export default class AddPost extends Component {
    constructor () {
        super();
        this.state = {
            fireRedirect: false
        }
    }
    submitForm = (e) => {
        e.preventDefault()
        this.setState({ fireRedirect: true })
    }
    
    render() {
        const { from } = this.props.location.state || '/';
        const { fireRedirect } = this.state;

        return(
            <div className="add-post_container">
                <form onSubmit={this.submitForm}>
                    <input placeholder="Post title"/>   
                    <textarea placeholder="post-content"></textarea>
                    <input type="submit" value="Fly" />
                </form>

                {fireRedirect && (
                    <Redirect to={from || '/posts'}/>
                )}
            </div>
        )
    }
}
