import { useContext, useEffect, useRef, useState } from "react";
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

  const onMarkAsCompleted = () => {
    setIsActive(!isActive);
  }

  const onChangeTodoStatus = () => {
    if(TodoTitle.current.classList.contains('line-through')){
      toast.success('Todo marked as pending again');
    } else {
      toast.success('Todo marked as completed');
    }
  }

  useEffect(() => {
    if(isActive){
      TodoTitle.current.classList.add('line-through');
      TodoDescription.current.classList.add('line-through');
    } else{
      TodoTitle.current.classList.remove('line-through');
      TodoDescription.current.classList.remove('line-through');
    }
  }, [isActive]);

  return (
    <article className='flex flex-row items-center justify-between m-2 bg-slate-50 rounded-xl p-4'>
      <div>
        <h1 ref={ TodoTitle } className=' break-words text-3xl font-bold p-2 sm:text-2xl'>{ todo.title }</h1>
        <p ref={ TodoDescription } className='p-2 break-words'>{ todo.description }</p>
      </div>
      
      <div>
        <button className='rm:w-[45%]' onClick={ () => {
          onDeleteTodo(todo.id);
          toast.success('Todo deleted');
           } }><FontAwesomeIcon icon={ faTrash } className='text-red-600 h-6 p-2'/></button>
        <button className='rm:w-[45%]' onClick={() => {
          onMarkAsCompleted();
          onChangeTodoStatus();
        }}><FontAwesomeIcon icon={ faCheckCircle } className='h-6 p-2 text-emerald-500'/></button>
      </div>

    </article>
  )
}
