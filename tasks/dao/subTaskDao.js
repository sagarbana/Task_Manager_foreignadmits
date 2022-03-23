const mongoose = require('mongoose');

const constants = require('../../core/constants');

const subTaskSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        taskId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        checkStatus: {
            type: Boolean,
            default: false
        }
    }
);

const subTaskModel = mongoose.model('SubTaskList', subTaskSchema);

exports.createSubTask = (subTaskObj, next) => {
    
    subTaskModel
        .create(subTaskObj, (err) => {
            if(err) return next(err);
            
            return next(null);
        });
};


exports.modifyStatus = (subTaskObj, next) => {
    
    subTaskModel
        .findOneAndUpdate(
            {_id: subTaskObj.id, taskId: subTaskObj.taskId},
            {checkStatus: subTaskObj.checkStatus}, 
            (err) => {
            if(err) return next(err);
            
            return next(null); 
        });
};


exports.getInprogressTasks = (next) => {
    
    subTaskModel
        .find({checkStatus: false}, {}, {}, (err, allTasks) => {
            if(err) return next(err.message);
            
            if(!allTasks)   return next(null, 0);
        
            return next(null, allTasks);
        });
};


exports.getAllSubTasksByTaskId = (taskId, next) => {
    subTaskModel
        .find({taskId: taskId}, {}, {}, (err, allTasks) => {
            if(err) return next(err.message);
            
            if(!allTasks)   return next(null, 0);
        
            return next(null, allTasks);
        });
};