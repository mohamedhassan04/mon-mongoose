let mongoose = require("mongoose");
const express = require("express");
const app = express();
const Person = require("./person/person");

mongoose
  .connect("mongodb://localhost:27017/person")
  .then(() => console.log("Connecting To DB .. "))
  .catch((err) => console.log(err));

//Create and Save a Record of a Model:
app.post("/persons", (req, res) => {
  const person = new Person({
    name: "mohamed hassan",
    age: 29,
    favoriteFoods: [
      "Pizza cariebes",
      "3ejja",
      "salade tunisienne avec beaucoup de citron ",
    ],
  });
  person.save(() => {
    console.log("Person added succesfully .....");
  });
  res.send({ person: person });
});
arrayOfPeople = [
  {
    name: "Abdsellam",
    age: 29,
    favoriteFoods: ["karous", "wrata", "Pizza"],
  },
  {
    name: "Mohamed",
    age: 25,
    favoriteFoods: ["Pizza", "baguette"],
  },
  {
    name: "aboud",
    age: 20,
    favoriteFoods: [
      "kol chay yakla may9oulich la ",
      "yachrab kan 9azouz farnca",
    ],
  },
  {
    name: "Mary",
    age: 75,
    favoriteFoods: ["Pizza", "baguette"],
  },
  {
    name: "Mary",
    age: 80,
    favoriteFoods: ["Pizza", "baguette"],
  },
];

//Create Many Records with model.create()
/*Person.create(arrayOfPeople, (err, data) => {
  err ? console.log(err) : console.log("Many Records Added Succefully...");
});*/

//Use model.find() to Search Your Database
/*Person.find({}, (err, data) => {
err ? console.log(err) : console.log(data);
});*/

//Use model.findOne() to Return a Single Matching Document from Your Database
/*Person.findOne({ favoriteFoods: "baguette" }, (err, data) => {
err ? console.log(err) : console.log(data);
});*/

//Use model.findById() to Search Your Database By _id
/*Person.findById({ _id: "61703f9d04b8dc92c60d6a86" }, (err, data) => {
err ? console.log(err) : console.log(data);
});*/

//Perform Classic Updates by Running Find, Edit, then Save
/*Person.findByIdAndUpdate(
"61703f9d04b8dc92c60d6a88",
 { $push: { favoriteFoods: "hamburger" } },
 (err, data) => {
   err ? console.log(err) : console.log(data);
}
);*/

//Perform New Updates on a Document Using model.findOneAndUpdate()؛
/*Person.findOneAndUpdate(
  { name: "Mohamed" },
  { age: 20 },
  { new: true },
  (err, data) => {
    err ? console.log(err) : console.log(data);
  }
);*/

//Delete One Document Using model.findByIdAndRemove
/*Person.findByIdAndRemove({ _id: "61703f9d04b8dc92c60d6a86" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

//MongoDB and Mongoose - Delete Many Documents with model.remove()
/*Person.deleteMany({ name: "Mary" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

//Chain Search Query Helpers to Narrow Search Results
/*Person.find({ favoriteFoods: "Pizza" })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((err, data) => {
    err ? console.log(err) : console.log(data);
  });*/
app.listen(5000, (err) => {
  err ? console.log(err) : console.log("The Server is Running ....");
});
