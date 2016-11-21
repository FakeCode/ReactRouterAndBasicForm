import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

//read the filed from api or different source but for now, I'm defining its
const FIELDS = {
    title :
    {
        type: 'input',
        label: 'Enter title'
    },
     categories :
    {
        type: 'input',
        label: 'Enter categories'
    },
     content :
    {
        type: 'textarea',
        label: 'Enter content'
    }    
}



class PostsNew extends Component{

static contextTypes = {
    router: PropTypes.object
};

onSubmit(props){
    this.props.createPost(props)
        .then(() =>
        {
            //navigate by calling this.context.router.push
            this.context.router.push('/');
        });
}

renderField(fieldConfig, field){
    const fieldHelper = this.props.fields[field];
    return(
        <div key={`${fieldConfig.label}`} className={`form-group ${fieldHelper.touched && fieldHelper.error ? 'has-danger' : ''}`}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type className="form-control" {...fieldHelper}/>
                <div className="text-help">
                {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
    )};

render() {
const {handleSubmit} = this.props;
        return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Create A New Post</h3>
                {_.map(FIELDS, this.renderField.bind(this))}
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
        );
    }
}

function validate(values)
{
    const errors = {};
    _.each(FIELDS, (type, field)=>
    {
        if(!values[field])
        {
            errors[field] = `Enter a ${field}`;
        }
    });
   
    return errors;
}


//reduxForm: 1st argument is config, 2nd is mapStateToProps and 3rd is mapDispatchToProps; its like connect but with extra argument i.e config
export default reduxForm({
form: 'PostsNewForm',
fields: _.keys(FIELDS) ,
validate
}, null, {createPost})(PostsNew);