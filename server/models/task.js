console.log("inside of task.js");

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {type: String},
    description: {type: String},
    isComplete: {type: Boolean}
}, {timestamps: true});

mongoose.model('Task', TaskSchema);
