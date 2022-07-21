import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoContentState } from '../../store/atoms/todo/todolist'
import { AddTodo } from '../AddTodo/AddTodo'
import { TodoItem } from '../TodoItem/TodoItem'

type Props = {}

export function TodoList(props: Props) {
    const todos = useRecoilValue(todoContentState)

    return (
        <div>
            {todos.map(todoProps => (
                <TodoItem {...todoProps}
                    key = {todoProps.id}
                />
            ))}
            <AddTodo/>
        </div>
    )
}