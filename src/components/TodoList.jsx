import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoItem } from "./"

export const TodoList = () => {

  const { todos } = useContext(TodoContext);

  return (
    <section className='p-5 m-auto w-128 bg-slate-200 rounded-2xl font-light sm:w-[100%] my-5'>
            {
              todos.length === 0 ? <h4 className='text-center text-base '>No todos yet...</h4> : null
            }
            {
                todos.map(todo => {
                    return <TodoItem todo={ todo } key={ todo.id }/>
                })
            }
    </section>
   
  )
}
