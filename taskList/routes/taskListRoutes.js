const express = require('express');
const router = express.Router();

const taskListCtrl = require('../controllers/taskListCtrl');



router.use('/inprogress', (req, res) => {
    if(req.method === 'GET') {
        taskListCtrl.getInprogressTasks(req, res);
    }else {
        console.log("Invalide request");
        res.send({error : "Invalid request."});
    }
});

router.use('/new', (req, res) => {
    if(req.method === 'GET') {
        taskListCtrl.getNewTasks(req, res);
    }else {
        console.log("Invalide request");
        res.send({error : "Invalid request."});
    }
});

router.use('/completed', (req, res) => {
    if(req.method === 'GET') {
        taskListCtrl.getCompletedTasks(req, res);
    }else {
        console.log("Invalide request");
        res.send({error : "Invalid request."});
    }
});

module.exports = router;