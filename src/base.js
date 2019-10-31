import Rebase from 're-base'; // mirrors state to FB
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAHnKw63CUBAqSuCREgils_waYJ0qwpGiU',
  authDomain: 'daniel-deverell-pirates.firebaseapp.com',
  databaseURL: 'https://daniel-deverell-pirates.firebaseio.com',
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };