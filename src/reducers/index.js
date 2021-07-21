import firebase from 'firebase/app'
import { FirebaseReducer } from 'react-redux-firebase';
import {combineReducers} from 'redux';
import contact from './contact'

const fbConfig = {

}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
}



if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}

// Call reducers
export default combineReducers({
   firebase: FirebaseReducer,
   contact 
});