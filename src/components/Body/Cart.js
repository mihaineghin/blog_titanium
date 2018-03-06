import React, {Component} from 'react';

export default class Cart extends Component {
    render() {
        let cartInfo = {
            title: this.props.title,
            description: this.props.description,
            author: this.props.author,
            cartImage: require(`../../assets/images/${this.props.cartImage}.jpg`),
            avatarImage: require(`../../assets/images/${this.props.avatarImage}.png`),
        }
        
        console.log(cartInfo.description)
        if(cartInfo.description !== undefined && cartInfo.description.length > 0)
            return(
                <a href="hehe.html" className="cart-item">
                    <div className="cart-title" style={{backgroundImage: `url(${cartInfo.cartImage})` }}>
                        <p>{cartInfo.title}</p>
                    </div>
            
                    <div className="description">
                        <p>
                            {cartInfo.description}   
                        </p>
                    </div>
                
                    <div className="cart-footer">
                        <div className="avatar" style={{backgroundImage: `url(${cartInfo.avatarImage})` }} />
                        <div className="post-info">
                            <p className="auth-name">{cartInfo.author}</p>
                            <p className="time">2 days ago</p>
                        </div>
                    </div>
                </a>
            )
            return(
                <a href="hehe.html" className="cart-item">
                    <div className="cart-title" style={{backgroundImage: `url(${cartInfo.cartImage})` }}>
                        <p>{cartInfo.title}</p>
                    </div>
                  
                    <div className="cart-footer">
                        <div className="avatar" style={{backgroundImage: `url(${cartInfo.avatarImage})` }} />
                        <div className="post-info">
                            <p className="auth-name">{cartInfo.author}</p>
                            <p className="time">2 days ago</p>
                        </div>
                    </div>
                </a>
            )
    }
}
