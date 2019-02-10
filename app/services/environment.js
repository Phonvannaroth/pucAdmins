import { environmentRef } from "./data";
import { pushToObject } from "./mapping";

export function getEnvironment(key,callback){
    environmentRef(key).onSnapshot(snapshot=>{
        callback(pushToObject(snapshot))
    })
}