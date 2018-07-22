import React, { Component } from 'react';
import Button from '../~library/Button';
import Textarea from '../~library/Textarea';
import TextInput from '../~library/TextInput';
import { connect } from 'react-redux';
import { apiCreateStory } from '../../api';

class AddStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.props.dispatch(apiCreateStory({
            title: this.state.title,
            description: this.state.description
        }));

        event.preventDefault();
    }

    render() {
        const { title, description } = this.state;
        const isValid = title.length > 0 && description.length > 0;

        return (
            <form>
                <label>
                    Title:
                        <TextInput
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Description:
                    <Textarea
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange} />
                </label>
                <Button type="button" disabled={!isValid} primary={!!isValid} onClick={this.handleSubmit}>Add</Button>
            </form>
        )
    }
}

const mapPropsToState = (state, props) => {
    return {
        id: state.user.id
    }
}

export default connect(mapPropsToState)(AddStory);
