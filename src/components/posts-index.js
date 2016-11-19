import React , { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  fetchPosts from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        console.log(connect);
        console.log('component did mount');
         this.props.fetchPosts();
    }

    render() {
        return (
            <div>
            <div className="text-xs-right"> 
            <Link to="/posts/new" className="btn btn-primary">Add New </Link>
            </div>
                List of blog
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);