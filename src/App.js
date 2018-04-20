import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import User from './components/user';
import Nav from './components/nav';
import StoryList from './components/storyList';
import Story from './components/story';
import StoryEdit from './components/storyEdit';
import AddStory from './components/addStory';
import Login from './components/login';
import Profile from './components/profile';
import ProfileEdit from './components/profileEdit';
import Home from './components/home';

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
        <div>
          <div className="App">
            <header className="App-header">
              <h1 title="Reconstruct stories from the past in a collaborative way." className="App-title">Story Collaborator</h1>
              <User />
            </header>
            <Nav />
            <ContentContainer>
              <Route exact path="/" component={ Home } />
              <Route exact path="/stories" component={ StoryList } />
              <Route exact path="/stories/:id" component={ Story } />
              <Route exact path="/stories/:id/edit" component={ StoryEdit } />
              <Route path="/add-story" component={ Add } />
              <Route path="/login" component={ Login } />
              <Route exact path="/profile" component={ Profile } />
              <Route exact path="/profile/:username" component={ Profile } />
              <Route exact path="/profile/:username/edit" component={ ProfileEdit } />
            </ContentContainer>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
