const { MongoClient } = require("mongodb");

async function checkDatabase() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const databases = await client.db().admin().listDatabases();
    console.log("Daftar Database:");
    databases.databases.forEach((db) => console.log(` - ${db.name}`));
  } finally {
    await client.close();
  }
}

checkDatabase().catch(console.error);
