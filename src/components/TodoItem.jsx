import { useContext, useRef, useState } from "react";
import { TodoContext } from "../context";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const TodoItem = ({ todo }) => {

  const { onDeleteTodo } = useContext(TodoContext);
  const [isActive, setIsActive] = useState(false);

  const TodoTitle = useRef();
  const TodoDescription = useRef();

  const onMarkAsCompleted = e => {
    setIsActive(!isActive);
    
    if(isActive){
      TodoTitle.current.classList.add('line-through');
      TodoDescription.current.classList.add('line-through');
    } else{
      TodoTitle.current.classList.remove('line-through');
      TodoDescription.current.classList.remove('line-through');
    }
  }

  return (
    <article className='flex flex-row items-center justify-between m-2 bg-slate-50 rounded-xl p-4'>
      <div>
        <h1 ref={ TodoTitle } className='break-all text-3xl font-bold p-2 sm:text-2xl'>{ todo.title }</h1>
        <p ref={ TodoDescription } className='p-2 break-all'>{ todo.description }</p>
      </div>
      
      <div>
        <button onClick={ () => {
          onDeleteTodo(todo.id);
          toast.success('Todo deleted');
           } }><FontAwesomeIcon icon={ faTrash } className='text-red-600 h-6 p-2'/></button>
        <button onClick={ onMarkAsCompleted }><FontAwesomeIcon icon={ faCheckCircle } className='h-6 p-2 text-emerald-500'/></button>
      </div>

    </article>
  )
}
