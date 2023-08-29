import { type ListOfTodos } from '../types';
import Todo from './Todo';
//import { Props as TodoProps } from './Todo';

interface Props{
  todos: ListOfTodos;
  onToggleCompleteTodo:(id:string, completed:boolean)=>void;
  onRemoveTodo: (id:string) => void;
}

export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo}) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo 
          key={todo.id}
          id={todo.id} 
          title={todo.title} 
          completed={todo.completed}
          onRemoveTodo={onRemoveTodo} 
          onToggleCompleteTodo={onToggleCompleteTodo}/>
        </li>
      ))}
    </ul>
  )
}

/**
 * En este archivo, se implementa el componente Todos que representa la lista completa de tareas. Recibe las siguientes propiedades mediante la interfaz Props:
 * to-dos: Un arreglo de tareas que se va a mostrar en la lista.
 * onRemoveTodo: Una función que se llama para eliminar una tarea.
 * onToggleCompleteTodo: Una función que se llama para cambiar el estado de completado de una tarea.
 * El componente Todos renderiza una lista no ordenada (ul) donde cada elemento de la lista (li) representa una tarea. 
 * Cada tarea se muestra utilizando el componente Todo al que se le pasan las propiedades necesarias.
 */