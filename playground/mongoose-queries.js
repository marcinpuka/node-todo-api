const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");


var id = '59bbcb0f4ad27a3124b13acf';

if (!ObjectID.isValid(id)) {
    console.log("ID not valid");
}

//Todo.find({
//    _id: id
//}).then((todos) => {
//   console.log("Todos", todos); 
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//   console.log("Todo", todo); 
//});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log("Id not found");
    }
   console.log("Todo by id", todo); 
}).catch((e) => console.log(e));

//User.findById("59bbb2ad44b2ae3a985a9d54").then((user) => {
//    if(!user) {
//        return console.log("Unable to find user");
//    } 
//    
//    console.log(JSON.stringify(user, undefined, 2));
//}, (e) => {
//   console.log(e); 
//});