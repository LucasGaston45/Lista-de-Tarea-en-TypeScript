type Props = {
    Tarea: string;
    borrarTarea: () => void
}

export const Tarea = ({Tarea, borrarTarea}: Props) => {
  return (
    <div className="task">
        <span>{Tarea}</span>
        <button onClick={borrarTarea}>Borrar Tarea</button>
    </div>
  )
}