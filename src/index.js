import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import connectDB from "../scripts/database.js";
import Task from "./tasks.js";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

// importamos las variables de entorno
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//inicializamos la app
const app = express();

const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
connectDB();
app.use(express.json());
//middleware para analizar el cuerpo de las solicitudes
//app.use(bodyParser.jason());

// Ruta para agregar una nueva tarea
app.post("/api/v1/loadTask", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task); // Devolver la tarea completa
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.get("/api/v1/getTasks", async (req, res) => {
  try {
    console.log("inicio");
    const tasks = await Task.find();
    console.log(tasks);
    res.json(typeof tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/", (req, res) => {
  res.send("hello worl");
});

// APP USER ROUTES
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log("_____--APPP WITH EXPRESS________");
  console.log(`App listening on port: http://localhost:${PORT}`);
});
console.log(__dirname);
