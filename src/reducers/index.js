import firebase from 'firebase/app'
import { FirebaseReducer, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import {combineReducers} from 'redux';

const fbConfig = {}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
}



firebase.initializeApp(fbConfig)

// Call reducers
export default combineReducers({
   firebase: FirebaseReducer 
});