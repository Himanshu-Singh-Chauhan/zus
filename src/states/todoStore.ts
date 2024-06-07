import { create } from 'zustand'

export type TodoType = {
    id: string,
    todo: string,
    isDone: boolean
}

export type States = {
    todos: Array<TodoType> | []
}

type Actions = {
    addTodo: (todo: TodoType) => void
}

export const todoStore = create<States & Actions>((set) => (
    {
        todos: [],
        addTodo: (todo: TodoType) => set((state) => ({todos: [todo, ...state.todos]})) 

    }
))