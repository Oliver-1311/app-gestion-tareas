import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//conexión a la Base de Datos

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/task", {});
  } catch (e) {
    console.error("Error de conexión a MongoDB: ", e);
  }
};

export default connectDB;
