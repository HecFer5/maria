import { pool } from "../db.js";
// TRAE TODOS LOS REGISTROS EN ACTIVIDAD
export const getTareas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM especies WHERE estado = 1"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// TRAE TODOS LOS REGISTROS ELIMINADOS
export const getTareasEliminadas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM especies WHERE estado = 0"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// TRAE UNA REGISTRO ESPECIFICO
export const getTarea = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM especies WHERE idespecie = ? ",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "el registro no existe" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//INGRESA UN NUEVO REGISTRO

export const crearTareas = async (req, res) => {
  try {
    const { comun, cientifico } = req.body;
    const [result] = await pool.query(
      "INSERT INTO especies (comun, cientifico) VALUES (?,?)",
      [comun, cientifico]
    );
    res.json({
      id: result.insertId,
      comun,
      cientifico,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//// MODIFICA UN REGISTRO
export const actualizarTarea = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE especies SET ? WHERE idespecie = ?",
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//// ELIMINA UNA TAREA (LA MANDA A INACTIVOS)
export const eliminarTarea = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE especies SET estado=0 WHERE idespecie= ?",
      [req.params.id]
    );
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

