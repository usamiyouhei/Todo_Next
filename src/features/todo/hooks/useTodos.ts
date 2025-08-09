'useClient'

import { useState } from "react";
import { safeLocalStorage } from "@/lib/storage";
import { Todo } from "@/types/Todo";

const KEY = 'todos:v1';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = ( text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      isDone: false
    }
    setTodos([newTodo, ...todos])
  }

  const toggleDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo ) )
  }
}