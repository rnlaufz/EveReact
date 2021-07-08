import './App.css';
import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

// Import components
import About from './pages/About';
import Book from './pages/Book';
import Showcase from './pages/Showcase';

export class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
      <Router>
      <Switch>
        {/* About route */}
        <Route exact path="/eve_about" render={props =>(<About/> )}/>
        {/* Book route */}
        <Route exact path="/eve_book" render={props =>(<Book/> )}/>
        {/* Index page route */}
        <Route exact path="/" component={() => 
          <Showcase/>
        } />
     
      </Switch>
      </Router>
      </Provider>
    )
  }
}

export default App;