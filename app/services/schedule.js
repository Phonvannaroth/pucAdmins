import { scheduleRef } from "./data";
import { pushToArray } from "./mapping";

export function getSchedule(termKey,campusKey,time,day, callback) {
    scheduleRef(termKey,campusKey,time,day).onSnapshot(req => {
    const list=pushToArray(req);
    console.log(list);
    callback(list);
    });
}