import { useTodos } from "@/features/todo/hooks/useTodos";
import { useEffect, useRef, useState } from "react";

type Props = {
  onSubmit:(text: string) => void;
  placeholder: string;
  autoFocus: boolean;
  disabled: boolean;
  className: string;
}

export default function TodoForm({ 
  onSubmit, 
  placeholder='タスクを入力', 
  autoFocus= false, 
  disabled= false, className='' 
}: Props) {
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { if (autoFocus) inputRef.current?.focus()})

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    const value = text.trim();
    if(!value) return setError('入力してください')
    if(value.length > 100) return setError('100文字以内で入力してください');
    onSubmit(value);setText('');setError(null);inputRef.current?.focus()
  }

  return(

    <form onSubmit={handleSubmit} >
      <input ref={inputRef} value={text} placeholder={placeholder} disabled={disabled} />
      <button>追加</button>
    </form>
  )
}