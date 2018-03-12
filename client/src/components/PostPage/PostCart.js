import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class PostCart extends Component {

    state = {

    }

   

    render() {
        return(
            <div className="cart-style">
                <div className="cart-item">
                    <div className="cart-title" style={{backgroundImage: `url(../../../../${this.props.cartImage})` }}>
                        <p>{this.props.title}</p>
                    </div> 
                    {
                        this.props.description  &&  <div className="description">
                                                        <p>
                                                            {this.props.description}   
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
            </div>
        )
    }
}
