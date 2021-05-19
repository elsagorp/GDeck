import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

const uri = config.URI;

(async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    const db = await mongoose.connect(`${uri}`, mongooseOptions);
    console.log("Database is connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
