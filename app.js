var db = require('./models');

//CREATE
db.Classmate.create({ first_name: 'jane', last_name: 'doe', age: 26 })
  .then(function(mate){
  // you can now access the newly created task via the variable data
});

//READ
db.Classmate.find(1)
  .then(function(mate){
  // user will be an instance of User and stores the content of the table entry with id 1. if such an entry is not defined you will get null
  });

db.Classmate.findOrCreate({ where: {first_name: 'jane'}})
  .then(function(result){
    console.log("User is: ", result[0]);
    console.log("Was created: ", result[1]); // returns true if the user was created
  });

  db.Classmate
    .findAll()
    .then(function(mates){

    });

//UPDATE METHOD 1

db.Classmate.find({ where: {first_name: 'jane'}})
  .then(function(mate){
    first_name: 'Taco'
    mate.save();
  });

//UPDATE METHOD 2
db.Classmate.find({ where: {first_name: 'jane'}})
  .then(function(mate){
    mate.updateAttributes({
      first_name: 'Taco'
    }).then(function(){

    });

//DELETE

db.Classmate
  .find({ where: {first_name: 'jane'}})
  .then(function(mate){
    mate.destroy()
    .then(function(){

    })
  });

//Success handling
// each one is valid
Model.findAll().on('success', function(data) {})
Model.findAll().success(function(data) { })
Model.findAll().ok(function(data) { })


//Error handling
Model.findAll().on('error', function(err) { })
Model.findAll().error(function(err) { })
Model.findAll().failure(function(err) {  })
Model.findAll().fail(function(err) {  })


//Both success and error handling
Model.findAll().complete(function(err, result) { /* bar */ })
Model.findAll().done(function(err, result) { /* bar */ })

