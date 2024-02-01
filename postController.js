const { ObjectId } = require('mongodb');
const { getDatabase } = require('./db');

async function getAllPosts() {
  const db = getDatabase();
  return await db.collection('posts').find().toArray();
}

async function createPost(newPost) {
  const db = getDatabase();
  const result = await db.collection('posts').insertOne(newPost);
  return result.ops[0];
}

async function getPostById(postId) {
  const db = getDatabase();
  return await db.collection('posts').findOne({ _id: ObjectId(postId) });
}

module.exports = { getAllPosts, createPost, getPostById };
