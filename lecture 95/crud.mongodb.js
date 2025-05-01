use("CrudDB");
db.createCollection("courses");
db.courses.insertOne({
  name: "harshit sharma studying web dev forr free",
  price: 0,
  assignments: 12,
  projects: 12,
});
db.courses.insertMany([
  {
    name: "harshit sharma studying web dev for free",
    price: 0,
    assignments: 12,
    projects: 12,
  },
  {
    name: "rahul verma learning backend development",
    price: 500,
    assignments: 10,
    projects: 8,
  },
  {
    name: "ayush patel practicing frontend skills",
    price: 0,
    assignments: 15,
    projects: 7,
  },
  {
    name: "priya sharma building full stack projects",
    price: 999,
    assignments: 9,
    projects: 5,
  },
  {
    name: "aditya gupta mastering javascript",
    price: 0,
    assignments: 11,
    projects: 10,
  },
  {
    name: "neha yadav learning MERN stack",
    price: 1200,
    assignments: 8,
    projects: 6,
  },
  {
    name: "ravi kumar exploring web technologies",
    price: 0,
    assignments: 14,
    projects: 9,
  },
  {
    name: "sneha verma doing internship in web dev",
    price: 0,
    assignments: 13,
    projects: 11,
  },
  {
    name: "vishal singh learning web dev from youtube",
    price: 0,
    assignments: 7,
    projects: 4,
  },
  {
    name: "kiran joshi improving coding skills",
    price: 0,
    assignments: 16,
    projects: 13,
  },
]);
// let b=db.courses.findOne({price:0})
// console.log(b)
// let b=db.courses.updateOne({price:0},{$set:{price:1000} })
// console.log(b)
db.courses.deleteOne({price:0})