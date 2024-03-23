import mongoose from "mongoose";
import dotenv from 'dotenv'
import Exception from "../exceptions/Exception.js";
dotenv.config()

async function connect () {
  try {
    
    let connection = await mongoose.connect(process.env.MONGO_URI)
    console.log('connect mongoose successfully')

    return connection
  } catch (error) {
    debugger
    const {code} = error
    if (error.code == 8000)
      throw new Exception(Exception.WRONG_DB_USERNAME_PW)
    else if (error.code == 'ENOTFOUND')
      throw new Exception(Exception.WRONG_CONNECTION_STRING)

    throw new Exception(Exception.CANNOT_TO_MONGOOSE)
    
  }
}

export default connect








// import mongodb, { MongoClient, ServerApiVersion } from 'mongodb';
// import dotenv from 'dotenv'
// dotenv.config()



// const mongo = new MongoClient( process.env.MONGO_URI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       }
// })

// async function connectToMongoDB () { 
//     mongo.connect( (err, db) => {
//         if (err) throw err;

//         console.log('Connect Successfully')
//     })
// }

// export default connectToMongoDB

// const uri = "mongodb+srv://tutotial:0345004710t@cluster0.hzbnjuc.mongodb.net/TutorialJS?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     await client.connect();
//         console.log("Connected to MongoDB");

//         const database = client.db("TutorialJS");
//         const collection = database.collection("users");

//         let ojb = {name: 'hoang', phone: "0335"}

//         collection.insertOne(ojb)

//         // Lấy dữ liệu từ MongoDB
//         const cursor = collection.find({}); // Truyền điều kiện tìm kiếm vào đây nếu cần
//         console.log(typeof(cursor))
//         const data = await cursor.toArray();



//         console.log("Data from MongoDB:", data);

//         return data; 
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// export default run