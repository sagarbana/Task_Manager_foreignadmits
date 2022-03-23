const express = require('express');
const app= express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//const CONNECTION_URL = 'mongodb+srv://sagarbana:sagarbana@cluster0.tudvt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const taskRoute = require('./tasks/routes/taskRoute');
const subTaskRoute = require('./tasks/routes/subTaskRoute');
const taskListRoute = require('./taskList/routes/taskListRoutes');


app.use('/task', taskRoute);
app.use('/sub/task', subTaskRoute);
app.use('/list', taskListRoute);

app.get('/', (req, res) => {

    res.send("Task Manager : Foreign Admits");
});

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to database");
}).catch((e) => {
    console.log(e.message , "Connection to database failed");
});

app.listen(PORT, () => {
    console.log("Server is live on port 3000");
});