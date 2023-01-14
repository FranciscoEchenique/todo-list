import { AddTodo, TodoList } from './components';
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
      <main className='p-10 text-black text-sm font-[lato]'>
        
        <h1 className='text-center text-4xl font-bold mb-6 font-sans'>MY TODOS</h1>
        
        <Toaster position="bottom-right"/>

        <AddTodo />
        
        <TodoList /> 

      </main>
  )
}

export default App;
