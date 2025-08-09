import { useState } from "react";

type Props = {
  addTodo:(text: string) => void;
}

export default function TodoForm({ addTodo }: Props) {

  return(
    <form>
      <input type="text" />
      <button></button>
    </form>
  )
}