export interface Todo{
    id: string
    title: string
    completed: boolean
};

export type ListOfTodos = Todo[];

//types.d la d es de declaraciones, para saber que solo habra declaraciones
/**
 * En este archivo se definen los tipos de datos que se usaran en la aplicacion
 * To-do es una interfaz que define la estructura de un objeto "tarea" con tres propiedades(id, title, completed)
 * ListOfTodos es un tipo que se define como un arreglo de objetos que cumplen con la interfaz To-do - es un tipo para representar una lista de tareas
 */