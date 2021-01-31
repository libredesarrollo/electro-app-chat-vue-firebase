import firebase from "firebase/app"
import "firebase/database"

//import env from "./enviroment"
//firebase.initializeApp(env) //const app = 

export function getChats(room) {
    const ref = firebase.database().ref('messages/' + room);
    return ref

    /*ref.on('value',(snapshot)=>{
       const data = snapshot.val()
       console.log(data)
    })*/
}

export async function getGroups() {
    const ref = firebase.database().ref('groups/');
    let rooms = []

    await ref.once('value').then((snapshot) => {

        // const data = snapshot.val()
        snapshot.forEach(function (child) {
            rooms.push(
                {
                    id: child.key,
                    description: child.val().description
                }
            )
        })
    })

    return rooms

    /*ref.on('value',(snapshot)=>{
       const data = snapshot.val()
       console.log(data)
    })*/
}

export function sendMsj(room, msj, user) {
    const ref = firebase.database().ref('messages/' + room);

    ref.push({
        //"m3":{
        text: msj,
        email: user.email,
        uid: user.uid,
        date : Date.now()
        //}
    })
}