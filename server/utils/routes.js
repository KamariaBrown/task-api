console.log("inside of routes.js");

const Tasks = require("../controllers/tasks");

module.exports = function(app){
    app.get("/task", Tasks.getAll);
    app.post("/task", Tasks.create);
    app.get("/task/:id", Tasks.getOne);
    app.put("/task/:id",Tasks.update);
    app.delete("/task/:id",Tasks.delete);
}