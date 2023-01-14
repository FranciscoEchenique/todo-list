import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoItem } from "./"

export const TodoList = () => {

  const { todos } = useContext(TodoContext);

  return (
    <section>
            {
                todos.map(todo => {
                    return <TodoItem todo={ todo } key={ todo.id }/>
                })
            }
    </section>
   
  )
}
