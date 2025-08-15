'use client'
import TodoForm from "@/components/todo/TodoForm";
import { useTodos } from "@/features/todo/hooks/useTodos";

export default function Home() {
    const {todos, add, toggle, remove } = useTodos()

  return (
    <main className="mx-auto mt-10 max-w-md px-4">
      <h1>📝 ToDo List</h1>
      <TodoForm 
        onSubmit={add} 
        autoFocus
        placeholder="タスクを入力"
        disabled={false}
      />

    </main>
  );
}
