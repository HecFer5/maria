import express from "express";
import { PORT } from "./config.js";
import rutasDeTareas from "./rutas/rutasTareas.js";

const app = express();
app.use(express.json())
app.listen(PORT);
app.use(rutasDeTareas);
console.log("leyendo en el puerto " + PORT);
