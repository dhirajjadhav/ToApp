
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

var taskList = [];
fs.readFile("./data/list.json", function(err, data){
    if(err)
        console.log("file reading failed.");
    else
    {
        taskList = JSON.parse(data);
    }
        
});

app.get("/tasks", function(req, res){
    res.status(200);//success
    res.send(JSON.stringify(taskList));
});

app.post("/tasks", function(req, res){
    // let task = JSON.parse(req.body);
    // taskList.push(task);
    
    // send(JSON.stringify(taskList));
    console.log(req);
    res.send();
});



app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})
