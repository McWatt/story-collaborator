import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../~library/Button';
import { updateToLoggedInStatus } from '../user';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        // TODO: hard-coded values should be returned from api on success
        this.props.dispatch(updateToLoggedInStatus({
            name: 'erik.phipps',
            id: 9879879
        }));

        // TODO: redirect to homepage on success
        this.props.history.push('/');

        event.preventDefault();
    }

    render() {
        const { email, password } = this.state;
        const isValid = email.length > 0 && password.length > 0;

        return (
            <div>
                <header>
                    <h1>Login</h1>
                </header>
                <form>
                    <label>
                            Email:
                            <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        </label>
                    <br />
                    <label>
                        Password:
                            <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </label>
                    <Button type="button" disabled={!isValid} onClick={this.handleSubmit}>Login</Button>
                </form >
            </div>
        );
    }
}

// function mapStateToProps(state, props) {
//     return {
//         story: state.user.id
//     };
// }

export default connect()(Login);
