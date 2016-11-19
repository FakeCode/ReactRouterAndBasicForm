import React, { Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component{
    render() {
const {fields: {title, categories, content}, handleSubmit} = this.props;
        return(
        <form onSubmit={handleSubmit(this.props.createPost)}>
            <h3>Create A New Post</h3>
            <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`}>
                <label>Title</label>
                <input type="text" className="form-control" {...title}/>
                <div className="text-help">
                {title.touched ? title.error : ''}
                </div>
            </div>
            <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" {...categories}/>
            {categories.touched ? categories.error : ''}
            </div>
            <div className="form-group">
            <label>Content</label>
            <input type="text" className="form-control" {...content}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        );
    }
}

function validate(values)
{
    const errors = {};
    if(!values.title){
        errors.title = 'Enter title';
    }
    if(!values.categories){
        errors.categories = 'Enter Categories';
    }
    
    return errors;
}


//reduxForm: 1st argument is config, 2nd is mapStateToProps and 3rd is mapDispatchToProps; its like connect but with extra argument i.e config
export default reduxForm({
form: 'PostsNewForm',
fields: ['title', 'categories', 'content'],
validate
}, null, {createPost})(PostsNew);