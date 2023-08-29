import { useState } from "react"

interface Props {
    saveTodo: (title: string) => void
  }
  
  export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {

    const [inputValue, setInputValue] = useState('');
    
    //El evento que recibimos viene del form
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>): void =>{
      event.preventDefault();
      //Llamamos al saveTodo
      saveTodo(inputValue);
      setInputValue('');
    }

    return (
      
      <form onSubmit={handleSubmit}>
        <input 
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value) //sin esto no me dejaria escribir en el input
        }}
        placeholder="Que quieres hacer"
        autoFocus
      />
      </form>
      

    )
  }