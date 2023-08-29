import {type Todo as TodoType} from '../types'

/**
 * Este archivo contiene la implementación del componente que representa una sola tarea en la lista. 
 * Aquí, el componente Todo recibe las siguientes propiedades mediante la interfaz Props: 
 * id, title, completed: Estas propiedades se desestructuran del objeto Props y representan la información de la tarea individual.
 * onRemoveTodo: Es una función que se llama cuando se quiere eliminar una tarea. Toma el id de la tarea como argumento.
 * onToggleCompleteTodo: Es una función que se llama cuando se cambia el estado de completado de una tarea. Toma el id de la tarea y un valor booleano como argumentos.
 */
interface Props extends TodoType {
    onRemoveTodo: (id:string) => void;
    onToggleCompleteTodo: (id:string, completed:boolean) => void;
}



  const Todo:React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) =>{

    /**
     * La función handleChangeCheckbox es una función que se utiliza para manejar el cambio en la casilla de verificación (checkbox) de completado en un elemento de la lista de tareas.
     *  Esta función se define en el componente Todo
     * (event: React.ChangeEvent<HTMLInputElement>): void =>: Esto es la definición de una función con un parámetro event. 
     * El parámetro event representa el evento de cambio que se genera cuando se interactúa con la casilla de verificación.
     * onToggleCompleteTodo(id, event.target.checked): Esta línea de código llama a la función onToggleCompleteTodo que se pasa como una propiedad al componente Todo. 
     *  Se le pasan dos argumentos:
     * id: El identificador único de la tarea, que se obtiene de las propiedades del componente Todo.
     * event.target.checked: Esto obtiene el valor actual de la casilla de verificación. Si está marcada, event.target.checked será true, y si no está marcada, será false.
     */

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        onToggleCompleteTodo(id, event.target.checked);
    }

/**
 * El componente Todo renderiza una entrada de tarea en la lista con una casilla de verificación (checkbox) que representa el estado de completado de la tarea. 
 * Al marcar o desmarcar la casilla, se llama a la función onToggleCompleteTodo con el id de la tarea y el valor actual de la casilla. 
 * También se muestra el título de la tarea y un botón para eliminar la tarea que llama a la función onRemoveTodo con el id de la tarea.
 */
    return(
        <>
            <div className="view">
                <input 
                    className="toggle"
                    checked={completed}
                    type="checkbox"
                    onChange={handleChangeCheckbox}
                    
                />

                <label>{title}</label>
                <button className='destroy' onClick={()=>{onRemoveTodo(id)}}>

                </button>

            </div>

        </>
    );
}

export default Todo;
