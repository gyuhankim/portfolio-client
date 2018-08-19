import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {submitBlogPost} from '../actions/blog';
import Input from './input';
import {required, nonEmpty} from '../validators';

export class BlogForm extends React.Component {
    onSubmit(values) {
        const {title, content, tags} = values;
        const post = {title, content, tags};
        return this.props.dispatch(submitBlogPost(post))   
    }

    render() {
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

                <label htmlFor="tags">Tags</label>
                <Field component="select" type="select" name="tags">
                    <option value="webdev">webdev</option>
                    <option value="gamedev">gamedev</option>
                    <option value="justforfun">justforfun</option>
                    <option value="life">life</option>
                </Field>
               
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
