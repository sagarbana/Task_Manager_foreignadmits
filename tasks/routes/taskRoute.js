const express = require('express');
const router = express.Router();

const taskCtrl = require('../controllers/taskCtrl');



router.use('/create', (req, res) => {
    if(req.method === 'POST') {
        taskCtrl.createTask(req, res);
    }else {
        console.log("Invalide request");
        res.send({error : "Invalid request."});
    }
});

router.use('/all', (req, res) => {
    if(req.method === 'GET') {
        taskCtrl.getAllTasks(req, res);
    }else {
        console.log("Invalide request");
        res.send({error : "Invalid request."});
    }
});

module.exports = router;