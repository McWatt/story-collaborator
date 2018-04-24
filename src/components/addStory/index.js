import React, { Component } from 'react';
import Button from '../~library/Button';
import { connect } from 'react-redux';
import { apiCreateStory } from '../../api';

class AddStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        // const id = new Date().valueOf();
        
        this.props.dispatch(apiCreateStory({
            title: this.state.title,
            content: this.state.content
        }));

        event.preventDefault();
    }

    render() {
        const { title, content } = this.state;
        const isValid = title.length > 0 && content.length > 0;

        return (
            <form>
                <label>
                    Title:
                        <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange} />
                </label>
                <Button type="button" disabled={!isValid} onClick={this.handleSubmit}>Add</Button>
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
