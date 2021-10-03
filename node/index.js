const app = require('express')();
const { MongoClient } = require('mongodb');
const cors = require('cors');

const PORT = 8080;
const URL = 'mongodb://root:password@mongoapp:27017/DockerReactJSDB';

const client = new MongoClient(URL, { authSource: "admin"});

app.use(cors());

async function main(){

  try{
  await client.connect();

  console.log("Succesfully connected to the database");
  const db = client.db("DockerReactJSDB");
  await db.createCollection('names');

  const names = db.collection("names");

  names.insertOne({ name: "Khoa", age: 15});


  app.get('/', (_, res) => {
      res.send('Hello');
  });

  app.get('/names', async (_, res) => {
      const namelist = await names.find({}).toArray();
      res.header("Access-Control-Allow-Origin", "*");
      res.send(namelist);
  });
  
  app.listen(PORT, () => {
      console.log("Listening on 8080...");
  });
  }catch(e){
      console.log(e);
  }

}

main();
