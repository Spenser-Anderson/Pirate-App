import Rebase from 're-base'; // mirrors state to FB
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAHnKw63CUBAqSuCREgils_waYJ0qwpGiU',
  authDomain: 'pirate-database.firebaseapp.com',
  databaseURL: 'https://pirate-database.firebaseio.com/',
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };