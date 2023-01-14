import { useTodos } from "../hooks/useTodos";
import { TodoContext } from ".";



export const TodoContextProvider = ({ children }) =>{

    const { todo, setTodo, todos, setTodos } = useTodos();
    
    return <TodoContext.Provider value={ { todo, setTodo, todos, setTodos } }>
            { children }
        </TodoContext.Provider>
}