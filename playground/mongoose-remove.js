const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

//Todo.remove({}).then((result) => {
//    console.log(result);
//});


// Todo.findOneAndRemove
// Todo.findByIdAndRemove 

Todo.findOneAndRemove({_id: "59bbe6c2a85f3d8f5fd3d773"}).then((todo) => {
    
});


Todo.findByIdAndRemove("59bbe6c2a85f3d8f5fd3d773").then((todo) => {
    console.log(todo);
});