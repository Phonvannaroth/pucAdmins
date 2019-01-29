import {auth,userRef,buildingRef, classroomRef} from './data';
import {pushToObject, pushToArray} from './mapping';

export function authStateChanged(callback){
    auth().onAuthStateChanged(user=>{
        if(user){
            callback(user)
        }
        else{
            callback(null)
        }
    })
}


export function signIn(email,password){
    return auth().signInWithEmailAndPassword(email,password)
}


export function getAccount(uid,callback){
    return userRef(uid).onSnapshot(docs=>{
        callback(pushToObject(docs))
    })
}


export function getBuilding(campusKey,callback){
    return buildingRef(campusKey).onSnapshot(docs=>{
        callback(pushToArray(docs))
    })
}

// export function getClassroom(classroomKey,callback){
//     return classroomRef(classroomKey).onSnapshot(docs=>{
//         callback(pushToArray(docs))
//     })
// }

export function signOut(){
    return auth().signOut();
}