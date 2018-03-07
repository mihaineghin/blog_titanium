import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Cart extends Component {
    render() {
        // let cartInfo = {
        //     title: this.props.title,
        //     description: this.props.description,
        //     author: this.props.author,
        //     cartImage: require(`../../assets/images/${this.props.cartImage}.jpg`),
        //     avatarImage: require(`../../assets/images/${this.props.avatarImage}.png`),
        // }
        
        // console.log(cartInfo.description)
        return(
            <Link to="/posts/:id">
                <div className="cart-item">
                    <div className="cart-title" style={{backgroundImage: `url(${this.props.cartImage})` }}>
                        <p>{this.props.title}</p>
                    </div>
                    {
                        this.props.description && <div className="description">
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
            </Link>
        )
    }
}
