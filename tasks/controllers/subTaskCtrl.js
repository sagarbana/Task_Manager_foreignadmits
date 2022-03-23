
const subTaskDao = require('../dao/subTaskDao');
const taskDao = require('../dao/taskDao');
const taskEval = require('../validators/taskEval');
const constants = require('../../core/constants');

exports.createSubTask = (req, res) => {
    console.log('after route');
    createSubTask(req, res, (err, data) => {
        if(err) res.status(404).send(err); //res.json({}) 

        else {
            console.log('Task created successfully');
            res.status(200).send('Sub Task Created');
        }
    });
};


const createSubTask = (req, res, next) => {
   
    taskEval.createSubTask(req.body, (err) => {
        if(err) return next(err);
        
        subTaskDao.createSubTask(req.body, (err) => {
            if(err) return next(err);
            
            taskDao.changeParentTaskStatus(req.body.taskId, constants.TASK_STATUS_INPROGRESS, (err) => {
                if(err) return next(err);

                return next(null);
            });
        
        });
    });
};

exports.modifyStatus = (req, res) => {
    
    modifyStatus(req, res, (err, data) => {
        if(err) res.status(404).send(err); //res.json({}) 

        else {
            console.log('Sub task status changed');
            res.status(200).send('Sub task status changed');
        }
    });
};


const modifyStatus = (req, res, next) => {
    
    taskEval.modifyStatus(req.query, (err) => {
        if(err) return next(err);
        
        subTaskDao.modifyStatus(req.query, (err) => {
            if(err) return next(err);

            return next(null);
        });
    });
};
