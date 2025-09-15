import { useState } from "react";
import "./App.css";
import type { TodoFormEvent } from "./types/todo";
import { useTodos } from "./hooks/useTodos";

function App() {
  const [newTodo, setNewTodo] = useState<string>('')
  const {todos, addTodo} = useTodos()
  
  const handleSubmit = (e: TodoFormEvent) => {
    e.preventDefault()

    if(newTodo.trim()){
      // new todo
      addTodo(newTodo.trim())
    }
  }
  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-2">
            <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              placeholder="Add a new todo...."
              className="flex-1 p-2 border rounded focus:outline-none focus:right-2 focus:ring-blue-500"
            />

            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-blue-500 ">Add</button>
          </div>
        </form>

        {/* display todo items */}
        <div className="space-y-2">
          {
            todos.map(todo => (
              <div key={todo.id}>
                {todo.text}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
