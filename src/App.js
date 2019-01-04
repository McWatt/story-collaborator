import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./styled/global";
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
import { StyledBody, StyledContent, StyledHeader } from "./styled/layout";

const Add = () => (
  <div>
    <h2>Add a story</h2>
    <AddStory />
  </div>
);

class App extends Component {
  render() {
    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Router>
          <StyledBody className="App">
            <StyledHeader className="App-header">
              <h1
                title="Reconstruct stories from the past in a collaborative way."
                className="App-title"
              >
                Story Collaborator
              </h1>
              <User />
            </StyledHeader>
            <Nav />
            <AppMessages />
            <StyledContent>
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
              <PrivateRoute
                exact
                path="/profile/:username"
                component={Profile}
              />
              <PrivateRoute
                exact
                path="/profile/:username/edit"
                component={ProfileEdit}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </StyledContent>
          </StyledBody>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.authentication.status
  };
};

export default connect(mapStateToProps)(App);
