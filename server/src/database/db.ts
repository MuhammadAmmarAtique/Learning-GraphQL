    
  import mongoose from "mongoose";
  
  export const connectDB = (uri: string) =>
    mongoose
      .connect(uri, { dbName: "LearningGraphQL" })
      .then((c) => {
        console.log(`Connected with ${c.connection.name} Database!`);
      })
      .catch((e) => console.log(`Err: during db connection through Mongoose ${e}`));
  
  