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
    
    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("59ba9d416d68eafd75a653ef")
    }, {
      $set: {
          completed: true
      }  
    }, {
        returnOriginal: false
    }).then((result) => {
       console.log(result); 
    });
    
    // db.close();
});