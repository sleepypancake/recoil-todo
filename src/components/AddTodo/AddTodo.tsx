import { nanoid } from 'nanoid'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoContentState } from '../../store/atoms/todo/todolist'
import { TodoContent } from '../../types'

type Props = {}

export function AddTodo({}: Props) {
    const [content, setContent] = useState<Omit<TodoContent, "id">>({description: "", title: ""})
    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        e.preventDefault()
        setContent(prev => ({...prev, [e.target.id]: e.target.value})
    )}

    const setTodos = useSetRecoilState(todoContentState)

    const addTodo: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        setTodos(todos => [...todos, { ...content, id: nanoid() }])
    }
  return (
    <form onSubmit={addTodo}>
        <input 
            onChange={handleChange} 
            value={content.title}
            id="title"
            required
        />
        <input 
            onChange={handleChange} 
            value={content.description}
            id="description"
        />
        <button 
            type="submit"
            disabled={!content.title}
        >
            Add Todo
        </button>
    </form>
  )
}