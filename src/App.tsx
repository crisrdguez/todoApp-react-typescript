import { useState } from "react";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
//import { Copyright } from "./components/Copyright";
import { mockTodos } from './mocks/todos';

const mockTodoss = mockTodos;

/**
 * El componente App es una función que retorna una estructura JSX (JSX.Element). 
 * Aquí, se utiliza el estado de useState para manejar las tareas de la aplicación. 
 * to-dos es el estado actual de las tareas y setTodos es la función para actualizar ese estado.
 */
const App = (): JSX.Element  => {

  const [todos, setTodos] = useState(mockTodoss);

  const [filterSelected , setFilterSelected] = useState<'all' |'active' | 'completed'>('all');

  /**
   * 
   * Funciones de manipulación de tareas:
   * handleRemove es una función que recibe un id y filtra las tareas para eliminar la tarea con el id correspondiente.
   * handleCompleted es una función que recibe un id y un valor completed. 
   *  -Mapea las tareas y, si encuentra una tarea con el id dado, actualiza su propiedad completed con el valor dado. De lo contrario, devuelve la tarea sin cambios.
   */

  const handleRemove = (id:string):void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id:string, completed:boolean):void =>{
    const newTodos = todos.map(todo =>{ //Aquí, se utiliza el método map en el arreglo todos para crear un nuevo arreglo newTodos en el que cada tarea se transforma según ciertas condiciones.
      if(todo.id === id){// En ese caso, se crea un nuevo objeto que es una copia de la tarea actual (...todo) pero con la propiedad completed actualizada con el valor de completed que se pasó a la función.
        return{
          ...todo,
          completed
        };
      }

      return todo;
    })

    setTodos(newTodos);
  }

  //Para cambiar el filterSelected
const handleFilterChange = (filter:'all' | 'active' | 'completed'): void => {
  setFilterSelected(filter);
}

//Para borrar todas las tareas que ya estan completadas de golpe
const removeAllCompleted = ():void => {
  const newTodos = todos.filter(todo => !todo.completed);
  setTodos(newTodos);
}

const activeCount = todos.filter(todo => !todo.completed).length;
const completedCount = todos.length - activeCount;

//Filtros
const filteredTodos = todos.filter(todo =>{
  if(filterSelected === 'active'){
    return !todo.completed;
  } 
  if(filterSelected === 'completed'){
    return todo.completed;
  } 
  return todo;
})

//Para añadir tareas
const handleAddTodo =  (title: string):void =>{

  //Creamos un nuevo Todo
  const newTodo = {
    id: crypto.randomUUID(),
    title,
    completed:false
  }

  const newTodos = [...todos, newTodo]; //to-dos los todos que teniamos antes mas el nuevo
  setTodos(newTodos);
}

  return (
    <div className="todoapp">
      
      <Header 
        onAddTodo={handleAddTodo}
      />

      <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo = {handleRemove}
      todos = {filteredTodos}
      />

      <Footer 
        activeCount={activeCount}
        completedCount ={completedCount}
        filterSelected = {filterSelected}
        handleFilterChange = {handleFilterChange}
        onClearCompleted = {removeAllCompleted}
      />
  
      
    </div>
  );
}

export default App;
