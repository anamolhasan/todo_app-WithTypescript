import { useState } from "react";
import type { Todo } from "../types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }
}
