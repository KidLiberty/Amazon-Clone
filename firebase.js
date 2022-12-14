import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBj_uh6merObQiaR5h6kyJs9Pxdqw3Kzrk',
  authDomain: 'clone-dc5d3.firebaseapp.com',
  projectId: 'clone-dc5d3',
  storageBucket: 'clone-dc5d3.appspot.com',
  messagingSenderId: '248924797793',
  appId: '1:248924797793:web:41ce7bae1d0acf837c2320'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
