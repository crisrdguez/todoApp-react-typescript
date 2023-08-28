import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [

  {
    id:'1',
    title:'Aprender React',
    completed:true
  },
  {
    id:'2',
    title:'todo 2',
    completed:false
  },
  {
    id:'3',
    title:'todo 3',
    completed:false
  },
  {
    id:'4',
    title:'todo 4',
    completed:true
  }

]

const App = (): JSX.Element  => {

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id:string):void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id:string, completed:boolean):void =>{
    const newTodos = todos.map(todo =>{
      if(todo.id === id){
        return{
          ...todo,
          completed
        };
      }

      return todo;
    })

    setTodos(newTodos);
  }

  return (
    <div className="todoapp">
      <h1>Todo MVC</h1>
      <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo = {handleRemove}
      todos = {todos}
      />
    </div>
  );
}

export default App;
