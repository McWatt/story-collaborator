import React, { Component } from 'react';
import Button from '../~library/Button';
import { connect } from 'react-redux';

function addStory(data) {
    return {
        type: 'ADD_STORY',
        payload: data
    }
}

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
        const id = new Date().valueOf();
        console.log(id);
        this.props.dispatch(addStory({
            [id]: {
                title: this.state.title,
                content: this.state.content
            }
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


/*
dispatch this:

{
type: 'ADD_STORY',
payload: {
1236: {
    title: 'asdfsadf',
    content: 'aasdfsdf'
}
}
}
 
*/

export default connect()(AddStory);
