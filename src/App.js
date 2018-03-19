import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import User from './components/user';
import Nav from './components/nav';
import StoryList from './components/storyList';
import styled from 'styled-components';


import AddStory from './components/AddStory';

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
              <Route path="/stories" component={StoryList} />
              <Route path="/add-story" component={Add} />
            </ContentContainer>
          </div>


        </div>
      </Router>



    );
  }
}

export default App;
