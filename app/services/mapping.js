import _ from 'lodash'
import moment from 'moment';

export function pushToArray(querySnapshot){
    return querySnapshot.docs.map(m=>({
        id:m.id,
        ...m.data()
    }))
}
export function pushToObject(docsSnapshot){
    return {id:docsSnapshot.id , ...docsSnapshot.data()}
}

export function groupBy(data,groupField,orderField){
    const gropus=_.uniqBy(data,groupField);
    return _.orderBy(gropus,[orderField]);
}

export function groupByDesc(data,groupField,orderField){
    const gropus=_.uniqBy(data,groupField);
    return _.orderBy(gropus,[orderField],['desc']);
}

export function currentHourToNumber(){
    return Number(moment().format("HH").toString()+'.'+moment().format("mm").toString())
}

export function hourSchedule(){
    const datetime=moment().add(-30,'minute');
    return Number(datetime.format("HH").toString()+'.'+datetime.format("mm").toString())
}
export function toHourSchedule(){
    const datetime=moment().add(2,'hour');
    return Number(datetime.format("HH").toString()+'.'+datetime.format("mm").toString())
}

export function currentDay(){
    const day=moment().format('dddd');
    return day.toLocaleLowerCase();
}


export function toDateKey(date){
    const day=moment(date).format('YYYYMMDD');
    return Number(day);
}

export function toCalendar(date){
    return moment(date).calendar()
}