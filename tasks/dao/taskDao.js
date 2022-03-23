const mongoose = require('mongoose');

const constants = require('../../core/constants');

const taskSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status:{
            type: String,
            default: constants.TASK_STATUS_NEW
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    }
);

const taskModel = mongoose.model('TaskList', taskSchema);

exports.createTask = (taskDetails, next) => {
    console.log('in dao ', taskDetails);
    taskModel
        .create(taskDetails, (err) => {
            if(err) return next(err);
            
            return next(null);
        });
};


exports.getAllTask = (next) => {
    
    taskModel
        .find({}, {}, {}, (err, allTasks) => {
            if(err) return next(err.message);
            
            if(!allTasks)   return next(null, 0);
        
            return next(null, allTasks);
        });
};


exports.getNewTasks = (next) => {
    
    taskModel
        .find({status: constants.TASK_STATUS_NEW}, {}, {}, (err, allTasks) => {
            if(err) return next(err.message);
            
            if(!allTasks)   return next(null, 0);
        
            return next(null, allTasks);
        });
};


exports.changeParentTaskStatus = (taskId, status, next) => {
    
    taskModel
        .findOneAndUpdate(
            {_id: taskId},
            {status: status}, 
            (err) => {
            if(err) return next(err);
            
            return next(null); 
        });
};


exports.getAllTasks = (next) => {
    
    taskModel
        .find({}, {}, {}, (err, allTasks) => {
            if(err) return next(err.message);
            
            if(!allTasks)   return next(null, 0);
        
            return next(null, allTasks);
        });
};


exports.getCompletedTasks = (next) => {
    
    taskModel
        .find({status: constants.TASK_STATUS_COMPLETED}, {}, {}, (err, allTasks) => {
            if(err) return next(err.message);
            
            if(!allTasks)   return next(null, 0);
        
            return next(null, allTasks);
        });
};