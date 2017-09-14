// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

/*
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{ //db object to read/write data
    if(err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to MongoDB server");
    
    
    //--- find() returns a cursor, toArray returns a promise ---//
//    db.collection("Todos").find({_id:new ObjectID("59ba639fdfbe1f0e185be663")}).toArray().then((docs) => {
//        console.log("Todos: ");
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log("Unable to fetch todos", err);
//    });
    
//        db.collection("Todos").find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//        console.log();
//    }, (err) => {
//        console.log("Unable to fetch todos", err);
//    });
    
    db.collection("Users").find({name: "Morty"}).toArray().then((docs)=> {
       console.log(JSON.stringify(docs, undefined, 2)); 
    });
    
    // db.close();
});