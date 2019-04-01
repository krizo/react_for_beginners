import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const fireBaseApp = firebase.initializeApp({
  apiKey: 'FireBaseAPIKey',
  authDomain: 'react-for-beginners-bfd6e.firebaseapp.com',
  databaseURL: 'https://react-for-beginners-bfd6e.firebaseio.com',
});
const base = Rebase.createClass(fireBaseApp.database());

// This is named export:
export { fireBaseApp };

// This is default export:
export default base;
