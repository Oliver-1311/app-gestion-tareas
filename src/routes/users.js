import express, { Router } from "express";

const userRoutes = express.Router();
import morgan from "morgan";
const users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
  },
];

//middewares
userRoutes.use((req, res, next) => {
  console.log(morgan("dev"));
  console.log("safs");
  next();
});
userRoutes.use(express.json());

// middleware de autentificación

// definición de rutas
userRoutes
  .route("/")
  .get((req, res) => {
    res.send("Peticion get");
  })
  .post((req, res) => {
    res.send("peticion post");
  })
  .put((req, res) => {
    res.send("petición put");
  })
  .delete((req, res) => {
    res.send("peticion delete");
  });

export default userRoutes;
