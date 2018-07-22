import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../~library/Button';
import TextInput from '../~library/TextInput';
import Textarea from '../~library/Textarea';
import { apiUpdateStory } from '../../api';

class Story extends Component {
    constructor(props) {
        super(props);

        const { title, content } = this.props.story;

        this.state = {
            content: content,
            title: title,
            activeParagraph: 0,
        };

        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleParagraphDelete = this.handleParagraphDelete.bind(this);
        this.handleParagraphAdd = this.handleParagraphAdd.bind(this);
        this.handleParagraphKeyUp = this.handleParagraphKeyUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.titleInput = React.createRef();

        this.dom = {};

        this.shouldFocusParagraph = false;
    }

    handleContentChange(event) {
        let contentCopy = [...this.state.content];

        contentCopy[event.target.dataset.key] = event.target.value;
        this.setState({ content: contentCopy });
    }

    handleParagraphDelete(event) {
        let contentCopy = [...this.state.content];

        this.setState({
            content: contentCopy.filter((item, index) => index !== Number(event.target.dataset.key))
        });
    }

    handleParagraphKeyUp(event) {
        const key = Number(event.target.dataset.key);

        if (event.keyCode === 13) {
            event.preventDefault();
            this.handleParagraphAdd(event);
            this.setState({
                activeParagraph: key + 1,
            });
            this.shouldFocusParagraph = true;
        } else if (event.keyCode === 8 && event.target.value.length === 0) {
            this.handleParagraphDelete(event);
            this.setState({
                activeParagraph: key - 1,
            });
            this.shouldFocusParagraph = true;
        } else {
            return false;
        }
    }

    handleParagraphAdd(event) {
        let contentCopy = [...this.state.content];
        let key = Number(event.target.dataset.key);
        let index = (typeof key === 'number' && !isNaN(key)) ? key + 1 : this.state.content.length;

        contentCopy.splice(index, 0, '');

        this.setState(() => ({ content: contentCopy }));
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        this.props.dispatch(apiUpdateStory({
            title: this.state.title,
            content: this.state.content,
            id: this.props.story.id,
        }));
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');

        // if (this.shouldFocusParagraph) {
        //     this.dom[`paragraphy-${this.state.activeParagraph}`].focus();
        //     this.shouldFocusParagraph = false;
        // }

    }

    componentDidMount() {
        this.titleInput.current.focus();
    }
    /*
        componentDidMount() {
            console.group('componentDidMount');
            console.log('invoked immediately after a component is mounted (inserted into the tree)');
            console.log('Initialization that requires DOM nodes should go here.');
            console.log('If you need to load data from a remote endpoint, this is a good place to instantiate the network request.');
            console.log('This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().');
            console.groupEnd();
        }
    
        componentDidUpdate() {
            console.log('componentDidUpdate');
        }
    
        componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    
        // Less used methods
        // https://reactjs.org/docs/react-component.html#shouldcomponentupdate
        shouldComponentUpdate(nextProps, nextState) {
            console.group('shouldComponentUpdate');
            console.log(nextProps, nextState);
            console.groupEnd();
            return true;
        }
    
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        getDerivedStateFromProps() {
            console.log('getDerivedStateFromProps');
        }
    
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
        getSnapshotBeforeUpdate() {
            console.log('getSnapshotBeforeUpdate');
    
            return null;
        }
    
        // https://reactjs.org/docs/react-component.html#componentdidcatch
        componentDidCatch(error, info) {
            console.group('componentDidCatch');
            console.log(error, info);
            console.groupEnd();
        }
    */
    render() {
        console.log(React);
        const paragraphs = this.state.content.map((item, idx) => {
            return (
                <div key={idx} >
                    <Textarea
                        data-key={idx}
                        onChange={this.handleContentChange}
                        onKeyDown={this.handleParagraphKeyUp}
                        value={item}
                        innerRef={(input) => { this.dom[`paragraphy-${idx}`] = input }}
                        autoFocus={this.state.activeParagraph === idx ? true : false}
                    ></Textarea>
                    <Button
                        type="button"
                        onClick={this.handleParagraphDelete}
                        data-key={idx}
                    >X</Button>
                </div>
            );
        });

        return (
            <div>
                <MouseTracker />
                <header>
                    <h1>Edit: </h1>
                    <TextInput
                        type='text'
                        name='title'
                        defaultValue={this.props.story.title}
                        onChange={this.handleChange}
                        innerRef={this.titleInput}
                    />
                </header>
                {paragraphs}
                <Button
                    type="button"
                    onClick={this.handleSubmit}
                >Save</Button>
                <Button
                    type="button"
                    onClick={this.handleParagraphAdd}
                >+</Button>
            </div>
        );
    }
}

Story.propTypes = {
    story: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.string)
    })
}

function mapStateToProps(state, props) {
    return {
        story: state.stories[props.match.params.id]
    };
}

export default connect(mapStateToProps)(Story);

