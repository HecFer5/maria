import { Router } from "express";
import {
  getTarea,
  getTareas,
  crearTareas,
  actualizarTarea,
  eliminarTarea,
  getTareasEliminadas
} from "../controladores/tareasControladores.js";

const router = Router();

router.get("/tarea", getTareas);
router.get("/tareano", getTareasEliminadas);
router.get("/tarea/:id", getTarea);
router.post("/tarea", crearTareas);
router.put("/tarea/:id", actualizarTarea);
router.put("/tareaeliminada/:id", eliminarTarea);
router.delete("/tarea/:id", eliminarTarea);

export default router;
