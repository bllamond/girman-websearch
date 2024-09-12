const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function addUsers() {
  try {
    await client.connect();
    const db = client.db();
    const usersCollection = db.collection('users');

    const filePath = path.join(__dirname, '../../data/users.json');
    const fileData = fs.readFileSync(filePath);
    const users = JSON.parse(fileData);

    await usersCollection.insertMany(users);
    console.log('Users added successfully!');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

addUsers();
