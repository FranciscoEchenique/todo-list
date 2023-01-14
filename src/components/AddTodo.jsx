import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { TodoContext } from "../context";
import { useForm } from "../hooks/useForm";

export const AddTodo = () => {

  const { formState, onInputChange, onResetForm } = useForm();

  const addForm = useRef();

  const { setTodo } = useContext(TodoContext);

  const onSubmitTodo = e => {
    e.preventDefault();
    if(formState.title.length === 0 || formState.description.length === 0) {
      toast.error('Add a title and a description');
      return;
    };
    
    setTodo({...formState, id: new Date().getMilliseconds()});

    toast.success('Todo added');

    addForm.current.reset();
    onResetForm();
  }

  return (
    <div className='p-5 m-auto w-128 bg-slate-200 rounded-2xl font-light sm:w-[100%]'>

      <h3 className="mb-1 ml-3 text-lg underline md:text-center">Add your todo:</h3>

      <form onSubmit={ onSubmitTodo } ref={ addForm } className='flex items-center justify-between md:flex-col'>
          <div className="md:flex md:w-[100%] md:flex-col">
            <input className='rounded-2xl m-2 p-3 border-2 text-black'type='text' placeholder="Todo title" onChange={ onInputChange } name='title' />

            <input className='rounded-2xl m-2 p-3 border-2 text-black'type='text' placeholder="Todo description" onChange={ onInputChange } name='description' />
          </div>

          <button className='p-4 text-white m-2 bg-emerald-500 rounded-3xl hover:scale-105 md:w-[95%] pl-5 pr-5' type="submit">Add todo</button>
      </form>
    </div>
        
  )
}
