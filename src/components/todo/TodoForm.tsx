import { useTodos } from "@/features/todo/hooks/useTodos";
import { useEffect, useRef, useState } from "react";

type Props = {
  onSubmit:(text: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  className?: string;
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

    <form onSubmit={handleSubmit} className={`flex items-start gap-2 ${className}`}>
      <div className="flex-1">
      <input 
        ref={inputRef} 
        value={text} 
        placeholder={placeholder} 
        disabled={disabled} 
        onChange={(e) => {
          setText(e.target.value); 
          if(error) setError(null)
        }}
        className="w-full rounded border px-3 py-2 outline-none focus:ring"
        aria-label="新規タスク"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
      <button 
        type="submit"
        disabled={disabled || !text.trim()}
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">追加</button>
    </form>
  )
}