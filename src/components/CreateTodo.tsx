import { useState } from "react"

interface Props {
    saveTodo: (title: string) => void
  }
  
  export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {

    const [inputValue, setInputValue] = useState('');

    //Controlamos que no haya tareas vacías
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      console.log(e.key);
      console.log(inputValue);
      if (e.key === 'Enter' && inputValue !== '') {
        console.log("entra?")
        saveTodo(inputValue)
        setInputValue('')
      }
    }
    
    //El evento que recibimos viene del form
    /*
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>): void =>{
      event.preventDefault();
      //Llamamos al saveTodo
      saveTodo(inputValue);
      setInputValue('');
    }*/

    return (
      
     
        <input 
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value) //sin esto no me dejaria escribir en el input
        }}
        onKeyDown={handleKeyDown}
        placeholder="Que quieres hacer"
        autoFocus
      />
     
      

    )
  }