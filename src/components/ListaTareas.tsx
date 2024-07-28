import { Tarea } from "./Tarea";

type Props = {
    listaTareas: string[];
    borrarTarea: (index:number) => void
}

export const ListaTareas = ({listaTareas, borrarTarea}: Props) => {
  return (
    <div className="taskList">
      {listaTareas.map((tarea, index) => (
          <Tarea key={index} Tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
      )
      )}
    </div>
  )
}