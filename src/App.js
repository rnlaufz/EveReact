import './App.css';
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

// Import components
import Navigation from './componets/Navigation';
import Footer from './componets/Footer';
import About from './pages/About';
import Book from './pages/Book';

export class App extends Component {
 
  render() {
    return (
  
      <Router>
      <Switch>
        {/* About route */}
        <Route exact path="/eve_about" render={props =>(<About/> )}/>
        {/* Book route */}
        <Route exact path="/eve_book" render={props =>(<Book/> )}/>
        {/* Index page route */}
        <Route exact path="/" component={() => 
        <Fragment>
           <Navigation/>
      <Footer/>
          </Fragment>
        } />
     
      </Switch>
      </Router>

    )
  }
}

export default App;