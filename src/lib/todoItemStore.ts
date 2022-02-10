
import { writable } from 'svelte/store'
import { uniqueId } from 'lodash'
import type { ITodoItem } from './types'

function handleTodoItem() {
  const { subscribe, update } = writable<ITodoItem[]>([
    {
      id: uniqueId(),
      title: 'Learn Svelte',
      completed: false
    },
    {
      id: uniqueId(),
      title: 'Learn vue',
      completed: true
    }
  ])

  const addNewTodoItem = () => {
    const newItem = {
      id: uniqueId(),
      title: 'Anything else ...',
      completed: false
    }

    return update(todoItems => [...todoItems, newItem])
  }

  const toggleCompleteItem = (id: string) => {
    return update(todoItems =>
      todoItems.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }

        return item
      })
    )
  }

  const removeItem = (id: string) => {
    return update(todoItems => todoItems.filter(item => item.id !== id))
  }

  return {
    subscribe,
    addNewTodoItem,
    toggleCompleteItem,
    removeItem,
  }
}

export const todoItems = handleTodoItem()
