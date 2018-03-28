import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAdjWjRuFoxt3EX4iDE6NSPLKMvtyRV2ZQ",
    authDomain: "bakatoo-edacb.firebaseapp.com",
    databaseURL: "https://bakatoo-edacb.firebaseio.com",
    projectId: "bakatoo-edacb",
    storageBucket: "bakatoo-edacb.appspot.com",
    messagingSenderId: "760275035084"
}

var fireb = firebase.initializeApp(config)

export default fireb
