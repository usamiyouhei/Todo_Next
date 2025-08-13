import { useTodos } from "@/features/todo/hooks/useTodos";
import { useRef, useState } from "react";

type Props = {
  onSubmit:(text: string) => void;
  placeholder: string;
  autoFocus: boolean;
  desabled: boolean;
  className: string;
}

export default function TodoForm({ 
  onSubmit, 
  placeholder='タスクを入力', 
  autoFocus= false, 
  desabled= false, className='' 
}: Props) {
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null)



  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    const value = text.trim();
    if(!value) return setError('入力してください')
  }
  return(

    <form>
      <input type="text" />
      <button>追加</button>
    </form>
  )
}