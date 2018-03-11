import React, {Component} from 'react'

import Cart from './Cart'
// import data from '../../data/data'

export default class Carts extends Component{
    state = {
        
    };

    componentDidMount() {
        fetch("/api/posts")
        .then(res => res.json())
        .then(postsCollection => {
            let data = postsCollection.map((el, index) => {
                return <Cart {...el} key={index} urlKey={index}/>
            })
            this.setState({data});
            console.log(postsCollection)
        });
    }
 
    render() {
        let posts = this.state.data;
        
        return(
            <div>
                {posts}
            </div>
        )
    }
}
