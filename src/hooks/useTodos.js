import { useState, useEffect } from "react";

export const useTodos = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        id: null
      });
    
    const [todos, setTodos] = useState([]);

    const onDeleteTodo = (id) => {
      const newTodoList = todos.filter(todo => todo.id !== id);

      setTodos(newTodoList);

    }

    useEffect(() => {
        if(!todo.id) return;
        setTodos([...todos, todo]);
      }, [todo]);

    return {
        todo, 
        setTodo,
        todos,
        setTodos,
        onDeleteTodo
    }
}