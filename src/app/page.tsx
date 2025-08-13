'use client'
import TodoForm from "@/components/todo/TodoForm";
import { useTodos } from "@/features/todo/hooks/useTodos";

export default function Home() {
    const {todos, add, toggle, remove } = useTodos()

  return (
    <main>
      <h1>📝 ToDo List</h1>
      <TodoForm addTodo={add}/>

    </main>
  );
}
