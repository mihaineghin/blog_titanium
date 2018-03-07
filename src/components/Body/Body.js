import React, {Component} from 'react';

export default class Body extends Component {
    render() {
        let carts = this.props.children;
        return( 
            <div className="main-container">
                <div className="carts-container">
                    {[carts]}
                </div>
            </div>
        )
    }
}
