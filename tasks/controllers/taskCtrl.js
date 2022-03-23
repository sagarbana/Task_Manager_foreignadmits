const taskDao = require('../dao/taskDao');
const taskEval = require('../validators/taskEval');

exports.createTask = (req, res) => {
    console.log('after route');
    createNewTask(req, res, (err, data) => {
        if(err) res.status(404).send(err); //res.json({}) 

        else {
            console.log('Task created successfully');
            res.status(200).send('Task Created');
            //res.redirect('https://www.YOUR_URL.com/')
        }
    })
}

const createNewTask = (req, res, next) => {
   
    taskEval.createTask(req.body, (err) => {
        if(err) return next(err);
        
        taskDao.createTask(req.body, (err) => {
            if(err) return next(err);

            return next(null);
        });
    });
};


exports.getAllTasks = (req, res) => {
    
    getAllTasks((err, allTasks) => {
        if(err) res.status(404).send(err); //res.json({}) 

        else {
            console.log('Task fetched successfully');
            res.status(200).send(allTasks);
            //res.redirect('https://www.YOUR_URL.com/') || ("/")
        }
    });
};

const getAllTasks = (next) => {
    taskDao.getAllTask( (err, allTasks) => {
        if(err) return next(err);

        console.log('all tasks' , allTasks);
        return next(null, allTasks);
    });
};