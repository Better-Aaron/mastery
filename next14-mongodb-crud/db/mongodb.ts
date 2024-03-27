import { MongoClient } from 'mongodb';

let dbClient;

try {
  if (!process.env.MONGODB_URL) {
    throw new Error('MongoDB URI is required');
  }

  dbClient = new MongoClient(process.env.MONGODB_URL);
  dbClient.connect();
} catch (err) {
  console.log(err);
}

export default dbClient as MongoClient;
