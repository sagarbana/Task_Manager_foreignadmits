
const subTaskDao = require('../../tasks/dao/subTaskDao');
const taskDao = require('../../tasks/dao/taskDao');
const constants = require('../../core/constants');

exports.getInprogressTasks = (req, res) => {
    console.log('after route');
    getInprogressTasks((err, allTasks) => {
        if(err) res.status(404).send(err); //res.json({}) 

        else {
            console.log('Task created successfully');
            //res.status(200).send(allTasks);
            res.status(200).json({"Inprogress Tasks" : allTasks});
        }
    });
};


const getInprogressTasks = (next) => {
    subTaskDao.getInprogressTasks( (err, allTasks) => {
        if(err) return next(err);

        console.log('all tasks' , allTasks);
        return next(null, allTasks);
    });
};


exports.getNewTasks = (req, res) => {
    console.log('after route');
    getNewTasks((err, allTasks) => {
        if(err) res.status(404).send(err); 

        else {
            console.log('Task fetched successfully');
            res.status(200).json({"New Tasks" : allTasks});
        }
    });
};


const getNewTasks = (next) => {
    taskDao.getNewTasks( (err, allTasks) => {
        if(err) return next(err);

        return next(null, allTasks);
    });
};


exports.getCompletedTasks = (req, res) => {
    console.log('after route');
    getCompletedTasks((err, allTasks) => {
        if(err) res.status(404).send(err); 

        else {
            console.log('Task fetched successfully');
            res.status(200).json({"Completed Tasks" : allTasks});
        }
    });
};


const getCompletedTasks = (next) => {
    taskDao.getAllTasks((err, allTasks) => {
        if(err) return next(err);

        allTasks.forEach(task => {
            
            subTaskDao.getAllSubTasksByTaskId(task._id, (err, allSubTasks) => {
                if(err) return next(err);
                
                let totalCountOfSubTasks = 0;
                let trueCount = 0;

                totalCountOfSubTasks = allSubTasks.length;

                if(totalCountOfSubTasks != 0) {
                    allSubTasks.forEach(subTask => {
                        if(subTask.checkStatus === true)    trueCount++;
                    });
                    console.log("subcount", totalCountOfSubTasks, trueCount);
                    if(totalCountOfSubTasks === trueCount) {
                        //chnage task status inprogress to completed
                        taskDao.changeParentTaskStatus(task._id, constants.TASK_STATUS_COMPLETED, (err) => {
                            if(err) return next(err);
                            
                        });
                    }
                }

                //return next(null, allSubTasks);
            });
        });

        taskDao.getCompletedTasks((err, completedTasks) => {
            if(err) return next(err);

            return next(null, completedTasks);            
        });
        
    });
};
