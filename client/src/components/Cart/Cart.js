import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Cart extends Component {

    handlePostId = () => {
        axios.post(`/api/posts/${this.props._id}`, this.props._id)
            .then(res => console.log(res.data))
    }

    render() {  
        return(
            <Link className="cart-style" to={'/posts/' + this.props.urlKey} onClick={this.handlePostId}>
            
                <div className="cart-item">
                    <div className="cart-title" style={{backgroundImage: `url(../../../../${this.props.cartImage})` }}>
                        <p>{this.props.title}</p>
                    </div>   
                    { 
                        this.props.moto  &&  <div className="description">
                                                        <p>
                                                            {this.props.moto}    
                                                        </p>   
                                                    </div>
                    }  
                
                    <div className="cart-footer"> 
                        <div className="avatar" style={{backgroundImage: `url(${this.props.avatarImage})` }} />
                        <div className="post-info">
                            <p className="auth-name">{this.props.author}</p>
                            <p className="time">2 days ago</p> 
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
