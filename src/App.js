import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./components/~library/globalStyles";
import "./App.css";
import styled from "styled-components";
import User from "./components/user";
import Nav from "./components/nav";
import StoryList from "./components/storyList";
import Story from "./components/story";
import StoryEdit from "./components/storyEdit";
import AddStory from "./components/addStory";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import ProfileEdit from "./components/profileEdit";
import Home from "./components/home";
import AppMessages from "./components/appMessages";
import PrivateRoute from "./components/~library/PrivateRoute";

const ContentContainer = styled.section`
  padding: 1em;
`;

const Add = () => (
  <div>
    <h2>Add a story</h2>
    <AddStory />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1
              title="Reconstruct stories from the past in a collaborative way."
              className="App-title"
            >
              Story Collaborator
            </h1>
            <User />
          </header>
          <Nav />
          <AppMessages />
          <ContentContainer>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/stories" component={StoryList} />
            <PrivateRoute exact path="/stories/:id" component={Story} />
            <PrivateRoute
              exact
              path="/stories/:id/edit"
              component={StoryEdit}
            />
            <PrivateRoute path="/add-story" component={Add} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/:username" component={Profile} />
            <PrivateRoute
              exact
              path="/profile/:username/edit"
              component={ProfileEdit}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </ContentContainer>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.authentication.status
  };
};

export default connect(mapStateToProps)(App);
