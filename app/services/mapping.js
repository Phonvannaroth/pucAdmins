import _ from 'lodash'
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
