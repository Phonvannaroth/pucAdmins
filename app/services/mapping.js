export function pushToArray(querySnapshot){
    return querySnapshot.docs.map(m=>({
        id:m.id,
        ...m.data()
    }))
}
export function pushToObject(docsSnapshot){
    return {id:docsSnapshot.id , ...docsSnapshot.data()}
}