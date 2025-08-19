    
  import mongoose from "mongoose";
  
  export const connectDB = (uri: string) =>
    mongoose
      .connect(uri, { dbName: "MyMongodbCompass" })
      .then((c) => {
        console.log(`Connected with ${c.connection.name}`);
      })
      .catch((e) => console.log(`Err: during db connection through Mongoose ${e}`));
  
  