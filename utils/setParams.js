function setParams(params){
    const arrayParams=Object.keys(params)
    const setClause=arrayParams.map(key=>`${key}=?`).join(", ")
    const values=arrayParams.map(key=>params[key])
    
    return [setClause, values]
}

module.exports={ setParams }