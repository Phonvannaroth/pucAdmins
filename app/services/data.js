import firebase from 'react-native-firebase'
import { settings } from '../dummy/settings';
import { toHourSchedule } from './mapping';

const db=firebase.firestore();

export function firestore(){
    return db
}

export function auth(){
    return firebase.auth();
}


export function createId(){
    return firebase.firestore().collection("academics_teaching_attendances").doc().id;
}

export function batch(){
    return firebase.firestore().batch();
}

export function termRef(key){
    return firebase.firestore().collection("academics_term").doc(key)
}

export function teachingAttendanceRef(){
    return firebase.firestore().collection("academics_teaching_attendances")
}

export function classByBuildingRef(termKey,buildingKey,day,time){
    return db.collection("academics_term").doc(termKey).collection("schedules")
    .where("room.building.key","==",buildingKey)
    .where("isBatch","==",true)
    .where("session.days."+day,"==",true)
    .where("session.fromHoursNumber",">=",time)
    .where("session.fromHoursNumber","<=",toHourSchedule())
    .orderBy("session.fromHoursNumber")
    .limit(settings.Size)
}

export function scheduleRef(termKey,campusKey,time,day){
    return db.collection("academics_term").doc(termKey).collection("schedules")
    .where("isBatch","==",true)
    .where("campus.key","==",campusKey)
    // .where("room.status")
    .where("session.days."+day,"==",true)
    .where("session.fromHoursNumber",">=",time)
    // .where("session.fromHoursNumber","<=",toHourSchedule())
    .orderBy("session.fromHoursNumber")
    .limit(settings.Size)
}

export function buildingRef(campusKey){
    return db.collection("building")
    .where("campus.key","==",campusKey)
}


export function campusRef(){
    return db.collection("building");
}

export function userRef(uid){
    return db.collection("users").doc(uid);
}

export function institutesRef(){
    return db.collection("institutes");
} 


export function environmentRef(key){
    return db.collection("academic_environment").doc(key);
} 

export function classroomRef(key){
    return db.collection("classroom").where ("building.key","==", key).orderBy("floor.order");
}