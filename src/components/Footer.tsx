
import { Filters } from "./Filters"

interface Props{
  activeCount:number;
  completedCount:number;
  filterSelected: 'all' | 'active' | 'completed';
  handleFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({activeCount = 0, completedCount = 0, filterSelected, handleFilterChange, onClearCompleted}) => {

  return (

    <footer className="footer">

      <span className="todo-count">

        <strong>{activeCount}</strong> tareas pendientes

      </span>

      <Filters 
        filterSelected={filterSelected}
        
        handleFilterChange={handleFilterChange}
      />

      {//renderizar un botón para borrar tareas completadas si hay al menos una tarea completada en la lista
        completedCount > 0 && //expresion condicional, Si esta condición es verdadera, se ejecutará el código dentro del bloque 
          <button
              className="clear-completed"
              onClick={onClearCompleted}>
                Borrar completados
          </button>
        
      }

    </footer>

  )


}