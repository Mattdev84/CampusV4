import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// console.log("init called")

// export default firebaseApp.firestore()

export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();