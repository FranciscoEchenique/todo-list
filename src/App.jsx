import { AddTodo, TodoList } from './components';

function App() {
  return (
      <main>
        <h1 className='underline '>My todos</h1>
        <AddTodo />
        <TodoList />
      </main>
  )
}

export default App;
