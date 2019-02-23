import { buildingRef, termRef, classByBuildingRef } from "./data";
import { pushToArray,toHourSchedule } from "./mapping";
import { settings } from '../dummy/settings';
import { onError } from "mobx-react";

export function getBuilding(campusKey,callback){
    buildingRef(campusKey).onSnapshot(list=>{
        callback(pushToArray(list))
    })
}

export function getClassByBuilding(termKey,buildingKey,day,time,callback){
    classByBuildingRef(termKey,buildingKey,day,time)
    .onSnapshot(snanpshot=>{
        callback(pushToArray(snanpshot))
    },err => {
        
    })
}