console.log("inside of tasks.js");

const mongoose = require("mongoose"),
          Task = mongoose.model("Task");

class Tasks {
    getAll(req, res){ //get all tasks
        Task.find({}, function(err, tasks){
            res.json({"status": "ok", "tasks": tasks});
        })
    }

    create(req, res){  //create a task
        console.log(req.body)
        let t = new Task(req.body);
        t.save(function(err){
            if(err){
                res.json({"status": "not ok", "err": err});
            } else {
                res.json({"status": "ok"});
            }
        })
    }
    getOne(req,res){ //get one task 
        console.log(req.params)
        Task.findOne({_id: req.params.id}, function(err, task){
            res.json({"status": "ok", "task": task});
        });
    
    }
    update(req,res){//update task 
        console.log(req.params,req.body);
        Task.findOneAndUpdate({_id: req.params.id}, req.body, function(err){
            console.log(err);
            res.json({"status": "ok"}); //have to put this or it will not work
        })
    }
    delete(req,res){ //deletes task 
        Task.deleteOne({_id:req.params.id}, function(err){
            res.json({"status":"ok"});
        } )
    }
}

module.exports = new Tasks();