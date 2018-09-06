import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {submitBlogPost} from '../actions/blog';
import {required, nonEmpty} from '../validators';
import { Redirect } from 'react-router-dom';

export class BlogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    onSubmit(values) {
        const {title, content} = values;
        const post = {title, content};
        this.setState({
            submitted: true
        })
        return this.props.dispatch(submitBlogPost(post))   
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
                
                <label htmlFor="content">Content</label>
                <Field component="textarea" type="textarea" name="content" validate={[required, nonEmpty]} />

                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                
            </form>
        );
    }
}

export default reduxForm({
    form: 'blog',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('blog', Object.keys(errors)[0]))
})(BlogForm);
