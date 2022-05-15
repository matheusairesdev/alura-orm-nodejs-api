module.exports = params =>{
    const propertyNames = Object.getOwnPropertyNames(params);
    const options = {where:{}};

    for(const i in propertyNames){
        if(propertyNames[i].toLowerCase() === 'orderby'){
            options.order = params[propertyNames[i]].split(',');
        }else{
            options.where[propertyNames[i]] = params[propertyNames[i]].split(',')
        }
    }

    return options;
}