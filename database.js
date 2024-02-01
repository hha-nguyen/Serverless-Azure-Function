// const users = [
//   {
//     email: "john@gmail.com",
//     password: "random",
//   },
//   {
//     email: "jack@gmail.com",
//     password: "JackPassword",
//   },
// ];

const publicPosts = [
  {
    title: "Post 1",
    content: "Post 1 is free",
  },
  {
    title: "Post 2",
    content: "Post 2 is free",
  },
];

const privatePosts = [
  {
    title: "Post 3",
    content: "Post 3 is private",
  },
];

const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://mesto298:Ha29082002@cluster-demo.vvzbhea.mongodb.net/serverless-DB-team-1?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

let db;

async function connectToDatabase() {
  const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  db = client.db();
  console.log('Connected to MongoDB');
}

function getDatabase() {
  return db;
}

module.exports = { connectToDatabase, getDatabase, publicPosts, privatePosts };