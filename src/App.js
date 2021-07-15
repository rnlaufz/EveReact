import './App.css';
import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

// Import components
import About from './pages/About';
import Book from './pages/Book';
import Showcase from './pages/Showcase';
import NotFound from './componets/NotFound';

import firebase from 'firebase/app'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import rrfConfig from './reducers/index.js'

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

export class App extends Component {
 
  render() {
    return (
      // Implement redux store
      <Provider store={store}>
        {/* Launch firebase */}
        <ReactReduxFirebaseProvider {...rrfProps}>
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
        {/* Index page route */}
        <Route component={NotFound} />
     
      </Switch>
      </Router>
      </ReactReduxFirebaseProvider>
      </Provider>
    )
  }
}

export default App;