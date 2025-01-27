const { MongoClient } = require("mongodb");

let db; // Global database reference

const connectDatabase = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db("yourDatabaseName"); // Replace "yourDatabaseName" with your database name
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

// Function to retrieve the database instance
const getDatabase = () => {
  if (!db) {
    throw new Error("Database not initialized. Call connectDatabase first.");
  }
  return db;
};

module.exports = { connectDatabase, getDatabase };
