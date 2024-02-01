const { getDatabase } = require('./database');

async function getAllUsers() {
  const db = getDatabase();
  return await db.collection('users').find().toArray();
}

async function createUser(newUser) {
  const db = getDatabase();
  const result = await db.collection('users').insertOne(newUser);
  return result.insertedId;
}

async function getUserByEmail(email) {
  const db = getDatabase();
  const user = await db.collection('users').findOne({ email: email });
  console.log('user:', user);
  return user;
}

module.exports = { getAllUsers, createUser, getUserByEmail };
