import firebase from "firebase/app"
import "firebase/auth"

import env from "./enviroment"

firebase.initializeApp(env) //const app = 

function signWithEmailPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export default signWithEmailPassword