import { classroomRef } from "./data";
import { pushToArray, pushToObject } from "./mapping";

export function getClassroom(callback){
    classroomRef().onSnapshot(list=>{
        callback(pushToArray(list))
    })
}
// export function getClassroom(key, callback) {
//     classroomRef(key).onSnapshot(req => {
//     const list=pushToArray(req);
//     const floor=groupBy(list,"floor.key","floor.order");
//     console.log(floor);
//         callback(list,floor)
//     }
//     )

// }