import React from 'react'
import {Form, Formik} from 'formik'

function FormularioTareas() {
  return (
    <div>
        <Formik>
            <Form>
                <label>Tarea</label>
                <input type="text" name="tarea" />
                <label>Descripción</label>
                <textarea 
                 name="descripcion"
                 rows={3}
                 placeholder='Ingrese la descripción'
                >
                   
                </textarea>
            </Form>
        </Formik>
    </div>
  )
}

export default FormularioTareas
