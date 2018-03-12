import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostCart from './PostCart';

export default class PostPage extends Component {

    state = { 

    }

    // componentWillMount() {
    //     axios(`/api/posts/:id`)
    //     .then(res => {
    //         let data = res.data
    //         this.setState({data});
    //         console.log(this.state)
    //     })
    // }
    render() {
        let post = this.state.data; 
        return( 
            <PostCart />
        ) 
    }
}
