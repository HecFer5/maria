export const getTareas = (req, res) => {
  res.send("obteniendo tareas");
};

export const getTarea = (req, res) => {
    res.send("obteniendo una tarea");
  };

  export const crearTareas = (req, res) => {
    res.send("creando tareas");
  };

 export const actualizaTarea = (req, res) => {
    res.send("actualizando una tarea");
  };

 export const borrarTarea = (req, res) => {
    res.send("borrando una tarea");
  };