

exports.createTask = (obj, next) => {
    if(!obj) {
        return next(new Error('Obj not found to create task'));
    }
    if(!obj.title) {
        return next(new Error('Title is missing to create task'));
    }
    if(!obj.description) {
        return next(new Error('Description is missing to create task'));
    }
    console.log('no error in eval ');
    return next(null);
};


exports.createSubTask = (obj, next) => {
    if(!obj) {
        return next(new Error('Obj not found to create sub task'));
    }
    if(!obj.name) {
        return next(new Error('Title is missing to create sub task'));
    }
    if(!obj.taskId) {
        return next(new Error('Task id is missing to create sub task'));
    }
    console.log('no error in eval ');
    return next(null);
};


exports.modifyStatus = (obj, next) => {
    if(!obj) {
        return next(new Error('Obj not found to change the status of sub task'));
    }
    if(!obj.id) {
        return next(new Error('sub task id not found to change the status of sub task'));
    }
    if(!obj.taskId) {
        return next(new Error('Task id not found to change the status of sub task'));
    }
    if(!obj.checkStatus) {
        return next(new Error('checkStatus is not found to change the status of sub task'));
    }
    
    return next(null);
};