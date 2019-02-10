import { batch, termRef, teachingAttendanceRef } from "./data";

export function setCheckIn(checkIn){
    const {key,term,id,schedule,checkDateKey,user,checkDate,status,note}=checkIn;
     const tran=batch();
     const termDoc=termRef(term.key);
     const movementRef=teachingAttendanceRef().doc(id);
     const scheduleRef=termDoc.collection("schedules").doc(schedule.key)
     tran.set(movementRef,checkIn);
     tran.update(scheduleRef,{
         [checkDateKey]:{
            user,
            checkDate,
            checkDateKey,
            status,
            note,
            key,
            id
         }
     })
     tran.set(termDoc.collection("teaching_attandances").doc(key),checkIn);
     return tran;
}