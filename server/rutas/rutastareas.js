import { Router } from "express";
const router = Router()
import { 
    getTarea,
    getTareas,
    crearTareas,
    actualizaTarea,
    eliminarTarea

 } from "../controladores/tareasControladores";

router.get('tarea/')
router.get('tarea/:id')
router.post('tarea/')
router.put('tarea/:id')
router.delete('tarea/:id')