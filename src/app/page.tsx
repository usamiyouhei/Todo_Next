'use client'
import TodoForm from "@/components/TodoForm";

export default function Home() {
  return (
   <TodoForm addTodo={add}/>
  );
}
