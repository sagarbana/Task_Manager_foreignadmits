const express = require('express');
const router = express.Router();

const subTaskCtrl = require('../controllers/subTaskCtrl');

router.use('/create', (req, res) => {
    if(req.method === 'POST') {
        subTaskCtrl.createSubTask(req, res);
    }else {
        console.log("Invalide request");
        res.send({error : "Invalid request."});
    }
});

router.use('/', (req, res) => {
    if(req.method === 'PUT') {
        subTaskCtrl.modifyStatus(req, res);
    }else {
        console.log("Invalide request");
        res.send({error : "Invalid request."});
    }
});

module.exports = router;