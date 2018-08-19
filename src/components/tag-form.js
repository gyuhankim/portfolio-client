import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {newTag} from '../actions/tag';
import {required, nonEmpty} from '../validators';

import '../styles/form.css';

export class TagForm extends React.Component {
    onSubmit(values) {
        const { tag } = values;
        const post = { tag };
        return this.props.dispatch(newTag(post))   
    }

    render() {
        return (
            <form
                className="tag-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                
                <label htmlFor="tag">Name</label>
                <Field component="input" type="text" name="tag" validate={[required, nonEmpty]} />
               
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
    form: 'tag',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('tag', Object.keys(errors)[0]))
})(TagForm);
