import { useContext } from "react";
import { TodoContext } from "../context";
import { useForm } from "../hooks/useForm";

export const AddTodo = () => {

  const { formState, onInputChange } = useForm();

  const { setTodo } = useContext(TodoContext);

  const onSubmitTodo = e => {
    e.preventDefault();

    setTodo({...formState, id: new Date().getMilliseconds()});
  }

  return (
    <div>
        <form onSubmit={ onSubmitTodo }>
            <input type='text' placeholder="New todo..." onChange={ onInputChange } name='title' />
            <input type='text' placeholder="Todo description" onChange={ onInputChange } name='description' />
            <button type="submit">Add todo</button>
        </form>
    </div>
  )
}
