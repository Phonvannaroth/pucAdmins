import { institutesRef } from "./data";
import { pushToArray } from "./mapping";

export function getInstitutes(callback){
    institutesRef().onSnapshot(list=>{
        callback(pushToArray(list))
    })
}