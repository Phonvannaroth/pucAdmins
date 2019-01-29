import firebase from 'react-native-firebase'

const db=firebase.firestore();

export function auth(){
    return firebase.auth();
}

export function buildingRef(campusKey){
    return db.collection("building")
    // .where("campus.key","==",campusKey)
    .orderBy("name");
}

export function classroomRef(key){
    // return db.collection("classroom").orderBy("name","ASC");
    return db.collection("classroom").where ("building.key","==", key).orderBy("floor.order");

}
export function campusRef(){
    return db.collection("building");
}
export function institutesRef(){
    return db.collection("institutes");
} 
export function userRef(uid){
    return db.collection("users").doc(uid);
}
