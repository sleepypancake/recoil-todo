import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { todoCompleteState } from '../../store/atoms/todo/todoComplete'
import { todoContentState } from '../../store/atoms/todo/todolist'
import { TodoContent } from '../../types'

export function TodoItem({id, title, description}: TodoContent) {
    const [isComplete, setIsComplete] = useRecoilState(todoCompleteState(id))
    const setTodos = useSetRecoilState(todoContentState)

    const toggleComplete = () => {
        setIsComplete(prevState => !prevState)
    }

    const deleteTodo = () => setTodos(todos => todos.filter(todo => todo.id !== id))

  return (
    <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div>
            <button onClick={toggleComplete}>
                {isComplete ? "Not complete" : "Complete"}
            </button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    </div>
  )
}