import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {submitBlogPost} from '../actions/blog';
import {required, nonEmpty} from '../validators';
import { Redirect } from 'react-router-dom';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class BlogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            text: ''
        }
    }

    onSubmit(values) {
        const {title} = values;
        const post = {title};
        post.content = this.state.text;
        this.setState({
            submitted: true
        })
        console.log(post);
        return this.props.dispatch(submitBlogPost(post))   
    }

    handleChange(value) {
        this.setState({
            text: value
        })
    }

    render() {
        if (this.state.submitted) {
            return <Redirect to="/blog" />
        }

        return (
            <form
                className="blog-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                
                <label htmlFor="title">Title</label>
                <Field component="input" type="text" name="title" validate={[required, nonEmpty]} />

                <ReactQuill 
                    theme="snow" 
                    modules={this.modules} 
                    formats={this.formats} 
                    value={this.state.text}
                    onChange={value => this.handleChange(value)}
                />

                <div>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                </div>
                
            </form>
        );
    }
}

export default reduxForm({
    form: 'blog',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('blog', Object.keys(errors)[0]))
})(BlogForm);
