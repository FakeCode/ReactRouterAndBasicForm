import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts-index';

import PostsNew from './components/posts-new';

const Home = () => {
    return (
        <div>Home</div>
    );
}

export default (
<Route path="/" component={App} >
    <IndexRoute component = { PostsIndex} />
    <Route path="home" component = {Home} />
    <Route path="posts/new" component = {PostsNew} />
</Route>
);