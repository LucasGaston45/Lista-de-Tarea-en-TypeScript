import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])
    const handleAddTask = () =>{
        if(nuevaTarea.trim() === '') return
        setListaTareas(tareaAnterior => [...tareaAnterior, nuevaTarea])
        setNuevaTarea('')
    }
            const handleBorrarTarea = (index:number) =>{
                setListaTareas(tareasActuales => tareasActuales.filter((_, i) => i !== index))
            }
  return (
    <>
        <h1>Lista de Tareas</h1>
        <div>
            <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Nueva Tarea" />
        <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </>
  )
}