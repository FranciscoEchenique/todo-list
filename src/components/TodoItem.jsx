import { useTodos } from "../hooks/useTodos"

export const TodoItem = ({ todo }) => {

  const { onDeleteTodo } = useTodos();

  return (
    <article>
        <h1 className="text-3xl font-bold underline">{ todo.title }</h1>
        <p>{ todo.description }</p>
        <button onClick={ () => onDeleteTodo(todo.id) }>Delete todo</button>
    </article>
  )
}
