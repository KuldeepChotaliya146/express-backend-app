import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
    console.log(`\n DB Connected! DB HOST: ${response.connection.host}`);
    return response
  } catch (error) {
    console.log("DB connection failed", error.message);
  }
}

export default connectDB; 