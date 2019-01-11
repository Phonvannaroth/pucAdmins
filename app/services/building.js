import { buildingRef } from "./data";
import { pushToArray } from "./mapping";

export function getBuilding(callback){
    buildingRef().onSnapshot(list=>{
        callback(pushToArray(list))
    })
}