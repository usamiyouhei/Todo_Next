'useClient'

import { useState, useEffect } from "react";
import { safeLocalStorage } from "@/lib/storage";
import { Todo } from "@/types/Todo";

const KEY = 'todos:v1';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => { setTodos(safeLocalStorage.get<Todo[]>(KEY, [])) }, [])
  useEffect(() => {safeLocalStorage.set(KEY, todos)} , [todos])

  const add = ( text: string) => {
    setTodos(prev => [{id: String(Date.now()), text, isDone: false}, ...prev])
  }

  const toggle = (id: string) => {
    setTodos(prev => prev.map(t => t.id === id ? {...t, isDone: !t.isDone} : t ) )
  }

  const remove = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id ))
  }

  return { todos, add, toggle, remove}
}