import firebase from 'react-native-firebase'

const db=firebase.firestore();

export function firestore(){
    return db
}

export function auth(){
    return firebase.auth();
}

export function buildingRef(campusKey){
    return db.collection("building")
    // .where("campus.key","==",campusKey)
    .orderBy("name");
}

export function campusRef(){
    return db.collection("building");
}

export function userRef(uid){
    return db.collection("users").doc(uid);
}
